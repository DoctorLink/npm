import { Action } from 'redux';
import { AxiosError } from 'axios';

export const SERVICE_SAGA_ERROR = 'SERVICE_SAGA_ERROR';
export interface ServiceSagaError extends Action<typeof SERVICE_SAGA_ERROR> {
  type: typeof SERVICE_SAGA_ERROR;
  error: AxiosError;
}
export const serviceSagaError = (error: AxiosError): ServiceSagaError => ({
  type: SERVICE_SAGA_ERROR,
  error,
});
