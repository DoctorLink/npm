# Traversals Service

The [Traversals Service](index.ts) is a class for making calls to the [Traversals Controller](https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#tag/Traversals). 

It extends [Traversals Base Service](../TraversalsBaseService.ts) to make use of shared endpoints with the [Chat Traversals Service](../ChatTraversals).

Here is an example of how to use the service:

```ts
import { TraversalsService } from "@doctorlink/traversal-react-redux";

// A factory method for retrieving a bearer token.
const getMyToken = async () => 'token';

// Constructing a new TraversalsService with the token factory and the baseurl including my tenant id.
const traversalsService = new TraversalsService('https://prod-platform-traversal-engine.doctorlink.engineering/api/v2/myTenantId', getMyToken);

// await the promise returned by the create method.
const serviceResponse = await traversalsService.create({ productId: 1 });

// The response object.
console.log(serviceResponse.data)

// The full fetch response.
console.log(serviceResponse.response)

// If there was an error.
console.log(serviceResponse.error)
```
