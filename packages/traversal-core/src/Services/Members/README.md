# Members Service

The [Members Service](index.ts) is a class for making calls to the [Members Controller](https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#tag/Members). 

Here is an example of how to use the service:

```ts
import { MembersService } from "@doctorlink/traversal-react-redux";

// A factory method for retrieving a bearer token.
const getMyToken = async () => 'token';

// Constructing a new MembersService with the token factory and the baseurl including my tenant id.
const membersService = new MembersService('https://prod-platform-traversal-engine.doctorlink.engineering/api/v2/myTenantId', getMyToken);

// await the promise returned by the create method.
const serviceResponse = await membersService.create({ memberReference: 'myMemberRef123' });

// The response object.
console.log(serviceResponse.data)

// The full fetch response.
console.log(serviceResponse.response)

// If there was an error.
console.log(serviceResponse.error)
```
