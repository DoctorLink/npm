# Services	

Services are a collection of classes that use the fetch api to make requests to the various Traversal Services. 
  
All services extend the [BaseService](BaseService.ts) class which has some default methods and properties. The constructor takes a controller base, controller name and an option token factory. The methods include fetch, setBaseUrl and setToken.

Here is an example of a service:

```ts
class MyService extends BaseService {
  constructor(
    // Pass a base url to the base service.
    controllerBase: string,
    // If a token factory is provided it will be called before every fetch and the bearer token will be updated.
    tokenFactory?: () => Promise<string | null>
  ) {
    super(controllerBase, 'MyService', tokenFactory);
  }
  
  public post = (body: SomeClass) =>
    // Fetch will add the default headers to the body, including content type and the bearer token.
    this.fetch<SomeOtherClass>(
      `${this.controllerBase}/${this.controllerName}`,
      {
        method: 'POST',
        body: JSON.stringify(body),
      }
    );
}

const myService = new MyService('baseurl');

// This will update the bearer token in the default options.
myService.setToken('some bearer token');

const serviceResponse = myService.post({prop: 'example'});
```

## API Services

|Service                               |API Docs                                                                                                                            |
|--------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
|[Traversals](Traversals)              |[Traversals Controller](https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#tag/Traversals)        |
|[ChatTraversals](ChatTraversals)      |[ChatTraversals Controller](https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#tag/ChatTraversals)|
|[Members](Members)                    |[Members Controller](https://prod-platform-traversal-engine.doctorlink.engineering/api-docs/v2/index.html#tag/Members)              |
|[HRA](HRA)                            |[HRA Controller](https://prod-platform-traversal-hra.doctorlink.engineering/api-docs/v1/index.html#tag/Report)                      |