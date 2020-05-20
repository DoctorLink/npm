export const WEB_API_NOT_OK = 'WEB_API_NOT_OK';
export const webApiNotOk = (apiCall: any, response: any) => ({
  type: WEB_API_NOT_OK,
  apiCall,
  response,
});

export const WEB_API_ERROR = 'WEB_API_ERROR';
export const webApiError = (apiCall: any, error: any) => ({
  type: WEB_API_ERROR,
  apiCall,
  error,
});

export type WebApiAction =
  | { type: typeof WEB_API_NOT_OK; apiCall: any; response: any }
  | { type: typeof WEB_API_ERROR; apiCall: any; response: any };
