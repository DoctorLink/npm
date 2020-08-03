export * from './Traversal';
export * from './Summary';
export * from './Conclusion';
export * from './HealthAssessment';
export * from './Modal';
export * from './State';

export type ServiceResponse<T> = { response?: Response; data?: T; error?: any };
