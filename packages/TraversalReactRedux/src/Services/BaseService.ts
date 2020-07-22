import { ServiceResponse } from '../Models/Service';

export const defaultHeaders: any = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

/**
 * A base class for web api services using the fetch api.
 */
export class BaseService {
  /**
   * @param controllerBase - The service's [[controllerBase]]
   * @param controllerName - The service's [[controllerName]]
   * @param tokenFactory - Optional factory to set [[options]]'s token before [[fetch]] calls.'
   */
  constructor(
    controllerBase: string,
    controllerName: string,
    tokenFactory?: () => Promise<string | null>
  ) {
    this.controllerBase = controllerBase;
    this.controllerName = controllerName;
    this.tokenFactory = tokenFactory;
    this.options = { headers: defaultHeaders } as RequestInit;
  }

  /**
   * The base url of the controller, used in constructing the service's [[fetch]] urls.
   * e.g. /engine or https://prod-platform-traversal-engine.doctorlink.engineering/api/v2/tenantId
   */
  protected controllerBase: string;

  /**
   * The name of the controller, used in constructing the service's [[fetch]] urls.
   */
  protected controllerName: string;

  /**
   * The default fetch options.
   */
  private options: RequestInit;

  /**
   * Optional token factory to get a token before every [[fetch]]
   */
  protected tokenFactory?: () => Promise<string | null> = undefined;

  /**
   * A typed wrapper for the fetch api.
   * If a token factory is set,
   * the token will be set before the call is made.
   * @typeParam T - The type of the response json.
   * @param input - The url.
   * @param init - The fetch options.
   */
  protected fetch = async <T>(
    input: RequestInfo,
    init: RequestInit = {}
  ): Promise<ServiceResponse<T>> => {
    if (this.tokenFactory) {
      const token = await this.tokenFactory();
      this.setToken(token);
    }

    init = {
      ...init,
      ...this.options,
    };

    const result: ServiceResponse<T> = await fetch(input, init)
      .then(response => ({ response }))
      .catch(error => ({ error }));

    if (result.response && result.response.ok) {
      result.data = await result.response.json();
    }

    return result;
  };

  /**
   * Set the service's [[controllerBase]]
   * @param controllerBase - e.g. /engine
   */
  public setBaseUrl = (controllerBase: string) => {
    this.controllerBase = controllerBase;
  };

  /**
   * Set the token to use in the service's [[options]]
   * @param token - Bearer token or null.
   */
  public setToken = (token: string | null) => {
    const headers = token
      ? { ...defaultHeaders, Authorization: `Bearer ${token}` }
      : defaultHeaders;
    this.options = { headers } as RequestInit;
  };
}
