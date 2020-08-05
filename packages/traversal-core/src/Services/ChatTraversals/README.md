# Chat Traversals Service

The [Chat Traversals Service](index.ts) is a class for making calls to the [Chat Traversals Controller](https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#tag/ChatTraversals). 

It extends [Traversals Base Service](../TraversalsBaseService.ts) to make use of shared endpoints with the [Traversals Service](../Traversals).

Here is an example of how to use the service:

```ts
import { ChatTraversalsService } from "@doctorlink/traversal-react-redux";

// A factory method for retrieving a bearer token.
const getMyToken = async () => 'token';

// Constructing a new ChatTraversalsService with the token factory and the baseurl including my tenant id.
const traversalsService = new ChatTraversalsService('https://prod-platform-traversal-engine.doctorlink.engineering/api/v2/myTenantId', getMyToken);

// await the promise returned by the create method.
const serviceResponse = await traversalsService.create({ productId: 1 });

// The response object.
console.log(serviceResponse.data)

// The full fetch response.
console.log(serviceResponse.response)

// If there was an error.
console.log(serviceResponse.error)
```
