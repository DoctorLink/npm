# HRA Service

The [Health Risk Assessment Service](index.ts) is a class for making calls to the [HRA Report Controller](https://prod-platform-traversal-hra.doctorlink.engineering/api-docs/v1/index.html#tag/Report). 

Here is an example of how to use the service:

```ts
import { HealthRiskAssessmentService } from "@doctorlink/traversal-react-redux";

// A factory method for retrieving a bearer token.
const getMyToken = async () => 'token';

// Constructing a new HealthRiskAssessmentService with the token factory and the baseurl including my tenant id.
const hraService = new HealthRiskAssessmentService('https://prod-platform-traversal-engine.doctorlink.hra/api/v1/myTenantId', getMyToken);

// await the promise returned by the getHealthRisk method.
const serviceResponse = await hraService.getHealthRisk('traversalid');

// The response object.
console.log(serviceResponse.data)

// The full fetch response.
console.log(serviceResponse.response)

// If there was an error.
console.log(serviceResponse.error)
```
