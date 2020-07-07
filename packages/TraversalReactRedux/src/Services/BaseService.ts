import { ServiceResponse } from '../Models/Service';

export const defaultHeaders: any = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export class BaseService {
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

  protected controllerBase: string;
  protected controllerName: string;
  protected options: RequestInit;
  protected tokenFactory?: () => Promise<string | null> = undefined;

  protected fetch = async <T>(
    input: RequestInfo,
    init?: RequestInit | undefined
  ): Promise<ServiceResponse<T>> => {
    if (this.tokenFactory) {
      const token = await this.tokenFactory();
      this.setToken(token);
      init = {
        ...init,
        ...this.options,
      };
    }

    const result: ServiceResponse<T> = await fetch(input, init)
      .then(response => ({ response }))
      .catch(error => ({ error }));

    if (result.response && result.response.ok) {
      result.data = await result.response.json();
    }

    return result;
  };

  public setBaseUrl = (controllerBase: string) =>
    (this.controllerBase = controllerBase);

  public setToken = (token: string | null) => {
    const headers = token
      ? { ...defaultHeaders, Authorization: `Bearer ${token}` }
      : defaultHeaders;
    this.options = { headers } as RequestInit;
  };
}
