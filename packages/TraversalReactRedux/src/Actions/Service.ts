import { Action } from 'redux';
import { ServiceResponse } from '../Models/Service';

export const SERVICE_SAGA_ERROR = 'SERVICE_SAGA_ERROR';
export interface ServiceSagaError extends Action<typeof SERVICE_SAGA_ERROR> {
  type: typeof SERVICE_SAGA_ERROR;
  serviceResponse: ServiceResponse<any>;
}
export const serviceSagaError = (
  serviceResponse: ServiceResponse<any>
): ServiceSagaError => ({
  type: SERVICE_SAGA_ERROR,
  serviceResponse,
});
