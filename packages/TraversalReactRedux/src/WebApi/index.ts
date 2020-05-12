interface IDictionary<TValue> {
  [id: string]: TValue;
}

const fetchOptions = (body: any | null) => {
  var headers: IDictionary<any> = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  // if (culture) headers['Content-Language'] = culture;
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

const v2QueryParams = (
  language?: string,
  version?: string,
  algoId?: number,
  nodeId?: number,
  memberReference?: string
) => {
  var qs = '';
  if (language) {
    qs += addQsParam(qs, language, 'language');
  }
  if (version) {
    qs += addQsParam(qs, version, 'release');
  }
  if (algoId) {
    qs += addQsParam(qs, algoId, 'algoId');
  }
  if (nodeId) {
    qs += addQsParam(qs, nodeId, 'nodeId');
  }
  if (memberReference) {
    qs += addQsParam(qs, memberReference, 'memberReference');
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
  productId: number,
  language?: string,
  version?: string,
  algoId?: number,
  nodeId?: number,
  injection?: any,
  memberReference?: string
) => {
  var qs = v2QueryParams(language, version, algoId, nodeId, memberReference);
  return fetchWrapper(
    `${api}/api/v2/Traversal/StartAsync/${productId}${qs}`,
    fetchOptions(injection),
    getToken
  );
};

const fetchTraversalNext = (api: any, getToken?: Promise<string>) => (
  traversalResponse: any
) =>
  fetchWrapper(
    `${api}/api/v2/Traversal/NextAsync`,
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
    `${api}/api/v2/Traversal/PreviousAsync/${traversalId}${qs}`,
    fetchOptions(null),
    getToken
  );
};

const fetchChatStart = (api: any, getToken?: Promise<string>) => (
  productId: number,
  language?: string,
  version?: string,
  algoId?: number,
  nodeId?: number,
  injection?: any,
  memberReference?: string
) => {
  var qs = v2QueryParams(language, version, algoId, nodeId, memberReference);
  return fetchWrapper(
    `${api}/api/v2/Chat/StartAsync/${productId}${qs}`,
    fetchOptions(injection),
    getToken
  );
};

const fetchChatNext = (api: any, getToken?: Promise<string>) => (
  traversalResponse: any
) =>
  fetchWrapper(
    `${api}/api/v2/Chat/NextAsync`,
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
    `${api}/api/v2/Chat/PreviousAsync/${traversalId}${qs}`,
    fetchOptions(null),
    getToken
  );
};

///GET
const fetchTraversalContinue = (api: any, getToken?: Promise<string>) => (
  traversalId: any
) =>
  fetchWrapper(
    `${api}/api/v2/Traversal/ContinueAsync/${traversalId}`,
    undefined,
    getToken
  );

const fetchChatContinue = (api: any, getToken?: Promise<string>) => (
  traversalId: any
) =>
  fetchWrapper(
    `${api}/api/v2/Chat/ContinueAsync/${traversalId}`,
    undefined,
    getToken
  );

const fetchTraversalSummary = (api: any, getToken?: Promise<string>) => (
  traversalId: any
) =>
  fetchWrapper(
    `${api}/api/v2/Traversal/SummaryAsync/${traversalId}`,
    undefined,
    getToken
  );

const fetchTraversalConclusion = (api: any, getToken?: Promise<string>) => (
  traversalId: any
) =>
  fetchWrapper(
    `${api}/api/v2/Traversal/ConclusionAsync/${traversalId}`,
    undefined,
    getToken
  );

const fetchTraversalSymptomReport = (api: any, getToken?: Promise<string>) => (
  traversalId: any
) =>
  fetchWrapper(
    `${api}/api/v2/Traversal/SymptomReportAsync/${traversalId}`,
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

const fetchComparisonReport = (hraApi: any, getToken?: Promise<string>) => (
  currentTraversal: string,
  pastTraversal: string,
  riskAtAge: number
) => {
  return fetchWrapper(
    `${hraApi}/Compare/Compare/${currentTraversal}/${pastTraversal}/${riskAtAge}`,
    undefined,
    getToken
  );
};

const fetchProducts = (api: any, getToken?: Promise<string>) => async () =>
  fetchWrapper(`${api}/api/v2/Products`, undefined, getToken);

///POST
const fetchCreateMember = (api: any, getToken?: Promise<string>) => (
  memberReference: any
) => {
  return fetchWrapper(
    `${api}/Member/CreateAsync`,
    fetchOptions(memberReference),
    getToken
  );
};

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
    comparisonReport: fetchComparisonReport(apiUrl, getToken),
  };
};

export const createMemberWebApi = (apiUrl: any, getToken?: Promise<string>) => {
  return {
    name: 'Member',
    isConfigured: !!apiUrl,
    createMember: fetchCreateMember(apiUrl, getToken),
  };
};
