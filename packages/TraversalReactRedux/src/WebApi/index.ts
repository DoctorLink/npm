interface IDictionary<TValue> {
  [id: string]: TValue;
}

const fetchOptions = (body: any | null, culture?: any) => {
  var headers: IDictionary<any> = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  if (culture) headers['Content-Language'] = culture;
  return {
    method: 'POST',
    headers: headers,
    body: typeof body === 'string' ? body : JSON.stringify(body),
  };
};

const addQsParam = (qs: any, param: any, name: any) => {
  var p = qs ? '&' : '?';
  p += `${name}=${param}`;
  return p;
};

const startQs = (release: any, lang: any, nodeId: any) => {
  var qs = '';
  if (release) {
    qs += addQsParam(qs, release, 'releaseNumber');
  }
  if (lang) {
    qs += addQsParam(qs, lang, 'language');
  }
  if (nodeId) {
    qs += addQsParam(qs, nodeId, 'nodeId');
  }
  return qs;
};

async function fetchWrapper(path: any, options?: any, getToken?: any) {
  if (getToken) {
    if (!options) options = { headers: {} };
    const token = await getToken();
    options.headers.Authorization = `Bearer ${token}`;
  }
  return fetch(path, options)
    .then(response => ({ response }))
    .catch(error => ({ error }));
}

///POST
const fetchTraversalStart = (api: any, getToken?: Promise<string>) => (
  algoId: any,
  release: any,
  lang: any,
  nodeId: any,
  injection: any,
  culture: any
) => {
  var qs = startQs(release, lang, nodeId);
  return fetchWrapper(
    `${api}/Traversal/StartAsync/${algoId}${qs}`,
    fetchOptions(injection, culture),
    getToken
  );
};

const fetchTraversalNext = (api: any, getToken?: Promise<string>) => (
  traversalResponse: any
) =>
  fetchWrapper(
    `${api}/Traversal/NextAsync`,
    fetchOptions(traversalResponse),
    getToken
  );

const fetchTraversalPrevious = (api: any, getToken?: Promise<string>) => (
  traversalId: any,
  algoId: any,
  nodeId: any
) => {
  var qs = algoId && nodeId ? `?algoId=${algoId}&nodeId=${nodeId}` : '';
  return fetchWrapper(
    `${api}/Traversal/PreviousAsync/${traversalId}${qs}`,
    fetchOptions(null),
    getToken
  );
};

const fetchChatStart = (api: any, getToken?: Promise<string>) => (
  algoId: any,
  release: any,
  lang: any,
  nodeId: any,
  injection: any,
  culture: any
) => {
  var qs = startQs(release, lang, nodeId);
  return fetchWrapper(
    `${api}/Chat/StartAsync/${algoId}${qs}`,
    fetchOptions(injection, culture),
    getToken
  );
};

const fetchChatNext = (api: any, getToken?: Promise<string>) => (
  traversalResponse: any
) =>
  fetchWrapper(
    `${api}/Chat/NextAsync`,
    fetchOptions(traversalResponse),
    getToken
  );

const fetchChatPrevious = (api: any, getToken?: Promise<string>) => (
  traversalId: any,
  algoId: any,
  nodeId: any,
  assetId: any
) => {
  var qs =
    algoId && nodeId && assetId
      ? `?algoId=${algoId}&nodeId=${nodeId}&assetId=${assetId}`
      : '';
  return fetchWrapper(
    `${api}/Chat/PreviousAsync/${traversalId}${qs}`,
    fetchOptions(null),
    getToken
  );
};

///GET
const fetchTraversalContinue = (api: any, getToken?: Promise<string>) => (
  traversalId: any
) =>
  fetchWrapper(
    `${api}/Traversal/ContinueAsync/${traversalId}`,
    undefined,
    getToken
  );

const fetchChatContinue = (api: any, getToken?: Promise<string>) => (
  traversalId: any
) =>
  fetchWrapper(`${api}/Chat/ContinueAsync/${traversalId}`, undefined, getToken);

const fetchTraversalSummary = (api: any, getToken?: Promise<string>) => (
  traversalId: any
) =>
  fetchWrapper(
    `${api}/Traversal/SummaryAsync/${traversalId}`,
    undefined,
    getToken
  );

const fetchTraversalConclusion = (api: any, getToken?: Promise<string>) => (
  traversalId: any
) =>
  fetchWrapper(
    `${api}/Traversal/ConclusionAsync/${traversalId}`,
    undefined,
    getToken
  );

const fetchTraversalSymptomReport = (api: any, getToken?: Promise<string>) => (
  traversalId: any
) =>
  fetchWrapper(
    `${api}/Traversal/SymptomReportAsync/${traversalId}`,
    undefined,
    getToken
  );

const fetchHealthRisks = (hraApi: any, getToken?: Promise<string>) => (
  traversalId: any,
  ages: any[],
  conclusions: any[]
) => {
  const qs = ages
    .map((age: any) => `ages=${age}`)
    .concat(conclusions.map((conc: any) => `conclusions=${conc}`))
    .join('&');
  return fetchWrapper(
    `${hraApi}/HealthRisk/${traversalId}?${qs}`,
    undefined,
    getToken
  );
};

const fetchWellness = (hraApi: any, getToken?: Promise<string>) => (
  traversalId: any,
  conclusions: any[]
) => {
  const qs = conclusions.map((conc: any) => `conclusions=${conc}`).join('&');
  return fetchWrapper(
    `${hraApi}/Wellness/${traversalId}?${qs}`,
    undefined,
    getToken
  );
};

const fetchProducts = (api: any, getToken?: Promise<string>) => async () =>
  fetchWrapper(`${api}/Products`, undefined, getToken);

export const createTraversalWebApi = (
  apiUrl: any,
  getToken?: Promise<string>
) => {
  return {
    name: 'Traversal',
    isConfigured: !!apiUrl,
    getProducts: fetchProducts(apiUrl, getToken),
    start: fetchTraversalStart(apiUrl, getToken),
    next: fetchTraversalNext(apiUrl, getToken),
    previous: fetchTraversalPrevious(apiUrl, getToken),
    continue: fetchTraversalContinue(apiUrl, getToken),
    summary: fetchTraversalSummary(apiUrl, getToken),
    conclusions: fetchTraversalConclusion(apiUrl, getToken),
    symptomReport: fetchTraversalSymptomReport(apiUrl, getToken),
  };
};

export const createChatWebApi = (apiUrl: any, getToken?: Promise<string>) => {
  return {
    name: 'Chat',
    isConfigured: !!apiUrl,
    getProducts: fetchProducts(apiUrl, getToken),
    start: fetchChatStart(apiUrl, getToken),
    next: fetchChatNext(apiUrl, getToken),
    previous: fetchChatPrevious(apiUrl, getToken),
    continue: fetchChatContinue(apiUrl, getToken),
    summary: fetchTraversalSummary(apiUrl, getToken),
    conclusions: fetchTraversalConclusion(apiUrl, getToken),
    symptomReport: fetchTraversalSymptomReport(apiUrl, getToken),
  };
};

export const createHealthAssessmentWebApi = (
  apiUrl: any,
  getToken?: Promise<string>
) => {
  return {
    name: 'Health Assessment',
    isConfigured: !!apiUrl,
    healthRisks: fetchHealthRisks(apiUrl, getToken),
    wellness: fetchWellness(apiUrl, getToken),
  };
};
