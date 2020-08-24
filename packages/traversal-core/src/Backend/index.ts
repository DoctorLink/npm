import axios from 'axios';
import { RequestHandler, NextFunction } from 'express';
import { IncomingMessage, ServerResponse } from 'http';

/**
 * A token endpoint response with an expiry JS time
 */
export interface ClientCredentialsToken {
  access_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
  expiry: number;
}

/**
 * Option for requesting a Client Credentials token.
 */
export interface ClientCredentialsOptions {
  /**
   * The url of the identity server. e.g. https://prod-platform-identity.doctorlink.engineering/
   */
  identityUrl: string;
  /**
   * The Client ID
   */
  clientId: string;
  /**
   * The Client Secret. Sensitive data, should be set via an environment variable and only used server side.
   */
  clientSecret: string;
}

/**
 * A class to manage to request and storage of valid Client Credential tokens.\
 * This should only be used server side due to the sensitive nature of the Client Credentials.
 */
export class ClientCredentialsTokenProvider {
  private options: ClientCredentialsOptions;
  private token?: ClientCredentialsToken;

  /**
   * Retrieve the stored valid token or request and return a new one.
   * @param options - The [[ClientCredentialsOptions]]
   */
  constructor(options: ClientCredentialsOptions) {
    this.options = options;
  }

  /**
   * Retrieve the stored valid token or request and return a new one.
   */
  public async get(): Promise<ClientCredentialsToken | undefined> {
    if (this.token && Date.now() < this.token.expiry) {
      return this.token;
    }

    const { identityUrl, clientId, clientSecret } = this.options;

    console.log('Requesting Client Credentials Token.');

    const { data } = await axios.post<ClientCredentialsToken>(
      `${identityUrl}connect/token`,
      `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
      {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      }
    );

    this.token = {
      ...data,
      expiry: Date.now() + (data.expires_in - 30) * 1000,
    };

    console.log('Client Credentials Token updated.');

    return this.token;
  }
}

/**
 * Create a node middleware that uses a [[ClientCredentialsTokenProvider]] to ammend the request authorization headers.
 * This should only be used server side due to the sensitive nature of the Client Credentials.
 *
 * Can be used with [express](https://expressjs.com/en/5x/api.html), [connect](https://github.com/senchalabs/connect),
 * [next-connect](https://github.com/hoangvvo/next-connect#readme), etc.
 */
export const createClientCredentialsMiddleware = (
  options: ClientCredentialsOptions
): RequestHandler => {
  const tokenProvider = new ClientCredentialsTokenProvider(options);
  return async (
    req: IncomingMessage,
    res: ServerResponse,
    next: NextFunction
  ) => {
    try {
      const token = await tokenProvider.get();
      if (token) req.headers.authorization = `bearer ${token.access_token}`;
      next();
    } catch (error) {
      console.log(error);
      res.statusCode = 401;
      res.end(
        JSON.stringify({ message: 'Client credentials authentication failed' })
      );
    }
  };
};
