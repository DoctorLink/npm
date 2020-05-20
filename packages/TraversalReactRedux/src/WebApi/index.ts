import { TraversalResponseModel } from 'Models';

export type FetchResult = { response: Response } | { error: any };

export type GetTokenFunction = () => Promise<string>;

const fetchOptions = (body: any | null): RequestInit => {
  return {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  };
};

const addQsParam = (qs: string, param: string | number, name: string) => {
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

async function fetchWrapper(
  path: string,
  options?: RequestInit,
  getToken?: GetTokenFunction
): Promise<FetchResult> {
  if (getToken) {
    if (!options) options = { headers: {} };
    const token = await getToken();
    options.headers = { ...options.headers, Authorization: `Bearer ${token}` };
  }
  return fetch(path, options)
    .then(response => ({ response }))
    .catch(error => ({ error }));
}

///POST
const fetchTraversalStart = (api: string, getToken?: GetTokenFunction) => (
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

const fetchTraversalNext = (api: string, getToken?: GetTokenFunction) => (
  traversalResponse: any
) =>
  fetchWrapper(
    `${api}/api/v2/Traversal/NextAsync`,
    fetchOptions(traversalResponse),
    getToken
  );

const fetchTraversalPrevious = (api: string, getToken?: GetTokenFunction) => (
  traversalId: string,
  algoId: number,
  nodeId: number
) => {
  var qs = algoId && nodeId ? `?algoId=${algoId}&nodeId=${nodeId}` : '';
  return fetchWrapper(
    `${api}/api/v2/Traversal/PreviousAsync/${traversalId}${qs}`,
    fetchOptions(null),
    getToken
  );
};

const fetchChatStart = (api: string, getToken?: GetTokenFunction) => (
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

const fetchChatNext = (api: string, getToken?: GetTokenFunction) => (
  traversalResponse: TraversalResponseModel
) =>
  fetchWrapper(
    `${api}/api/v2/Chat/NextAsync`,
    fetchOptions(traversalResponse),
    getToken
  );

const fetchChatPrevious = (api: string, getToken?: GetTokenFunction) => (
  traversalId: string,
  algoId: number,
  nodeId: number,
  assetId: number
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
const fetchTraversalContinue = (api: string, getToken?: GetTokenFunction) => (
  traversalId: string
) =>
  fetchWrapper(
    `${api}/api/v2/Traversal/ContinueAsync/${traversalId}`,
    undefined,
    getToken
  );

const fetchChatContinue = (api: string, getToken?: GetTokenFunction) => (
  traversalId: string
) =>
  fetchWrapper(
    `${api}/api/v2/Chat/ContinueAsync/${traversalId}`,
    undefined,
    getToken
  );

const fetchTraversalSummary = (api: string, getToken?: GetTokenFunction) => (
  traversalId: string
) =>
  fetchWrapper(
    `${api}/api/v2/Traversal/SummaryAsync/${traversalId}`,
    undefined,
    getToken
  );

const fetchTraversalConclusion = (api: string, getToken?: GetTokenFunction) => (
  traversalId: string
) =>
  fetchWrapper(
    `${api}/api/v2/Traversal/ConclusionAsync/${traversalId}`,
    undefined,
    getToken
  );

const fetchTraversalSymptomReport = (
  api: string,
  getToken?: GetTokenFunction
) => (traversalId: string) =>
  fetchWrapper(
    `${api}/api/v2/Traversal/SymptomReportAsync/${traversalId}`,
    undefined,
    getToken
  );

const fetchHealthRisks = (hraApi: string, getToken?: GetTokenFunction) => (
  traversalId: string,
  ages: number[],
  conclusions: number[]
) => {
  const qs = ages
    .map(age => `ages=${age}`)
    .concat(conclusions.map(conc => `conclusions=${conc}`))
    .join('&');
  return fetchWrapper(
    `${hraApi}/HealthRisk/${traversalId}?${qs}`,
    undefined,
    getToken
  );
};

const fetchWellness = (hraApi: string, getToken?: GetTokenFunction) => (
  traversalId: string,
  conclusions: number[]
) => {
  const qs = conclusions.map(conc => `conclusions=${conc}`).join('&');
  return fetchWrapper(
    `${hraApi}/Wellness/${traversalId}?${qs}`,
    undefined,
    getToken
  );
};

const fetchComparisonReport = (hraApi: string, getToken?: GetTokenFunction) => (
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

const fetchProducts = (api: string, getToken?: GetTokenFunction) => async () =>
  fetchWrapper(`${api}/api/v2/Products`, undefined, getToken);

///POST
const fetchCreateMember = (api: string, getToken?: GetTokenFunction) => (
  memberReference: any
) => {
  return fetchWrapper(
    `${api}/Member/CreateAsync`,
    fetchOptions(memberReference),
    getToken
  );
};

export const createTraversalWebApi = (
  apiUrl: string,
  getToken?: GetTokenFunction
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

export const createChatWebApi = (apiUrl: any, getToken?: GetTokenFunction) => {
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
  apiUrl: string = '',
  getToken?: GetTokenFunction
) => {
  return {
    name: 'Health Assessment',
    isConfigured: !!apiUrl,
    healthRisks: fetchHealthRisks(apiUrl, getToken),
    wellness: fetchWellness(apiUrl, getToken),
    comparisonReport: fetchComparisonReport(apiUrl, getToken),
  };
};

export const createMemberWebApi = (
  apiUrl: string,
  getToken?: GetTokenFunction
) => {
  return {
    name: 'Member',
    isConfigured: !!apiUrl,
    createMember: fetchCreateMember(apiUrl, getToken),
  };
};
