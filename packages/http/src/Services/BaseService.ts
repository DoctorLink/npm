import axios, { AxiosInstance } from 'axios';

/**
 * A base class for web api services using the axios http client.
 */
export class BaseService {
  /**
   * @param baseURL - The service's [[baseURL]] including the trailing /
   * @param controllerName - The service's [[controllerName]]
   * @param tokenFactory - Optional factory to set [[axios | axios instance]]'s token before http calls.'
   */
  constructor(
    baseURL: string,
    controllerName: string,
    tokenFactory?: () => Promise<string | null>
  ) {
    this.controllerName = controllerName;
    this.axios = axios.create({
      baseURL: `${baseURL}${controllerName}`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    if (tokenFactory)
      this.axios.interceptors.request.use(async (config) => {
        const token = await tokenFactory();
        const header = token ? `Bearer ${token}` : undefined;
        config.headers['Authorization'] = header;
        return config;
      });
  }

  /**
   * The axios instance used by this service.
   */
  protected axios: AxiosInstance;

  /**
   * The name of the controller, used in constructing the [[axios | axios instance]]'s baseURL.
   */
  private controllerName: string;

  /**
   * Set the service's [[baseURL]]
   * e.g. /engine/ or https://prod-platform-traversal-engine.doctorlink.engineering/api/v2/tenantId/
   * @param baseURL - e.g. /engine/
   */
  public setBaseUrl = (baseURL: string): void => {
    this.axios.defaults.baseURL = `${baseURL}${this.controllerName}`;
  };

  /**
   * Set the token to use in the service's [[axios | axios instance]]
   * @param token - Bearer token or null.
   */
  public setToken = (token: string | null): void => {
    const header = token ? `Bearer ${token}` : undefined;
    this.axios.defaults.headers.common['Authorization'] = header;
  };
}
