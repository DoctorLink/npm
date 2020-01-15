const fetchOptions = (body, culture) => {
    var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    if (culture)
        headers['Content-Language'] = culture;
    return {
        method: 'POST',
        headers: headers,
        body: typeof body === 'string' ? body : JSON.stringify(body)
    }
}

const addQsParam = (qs, param, name) => {
    var p = (qs) ? "&" : "?";
    p += `${name}=${param}`;
    return p
}

const startQs = (release, lang, nodeId) => {
    var qs = "";
    if (release) {
        qs += addQsParam(qs, release, "releaseNumber");
    }
    if (lang) {
        qs += addQsParam(qs, lang, "language");
    }
    if (nodeId) {
        qs += addQsParam(qs, nodeId, "nodeId");
    }
    return qs;
}

const fetchWrapper = (path, options) => fetch(path, options).then(response => ({ response })).catch(error => ({ error }))

///POST
const fetchTraversalStart = (api) => (algoId, release, lang, nodeId, injection, culture) => {
    var qs = startQs(release, lang, nodeId);
    return fetchWrapper(`${api}/Traversal/StartAsync/${algoId}${qs}`, fetchOptions(injection, culture))
}

const fetchTraversalNext = (api) => traversalResponse =>
    fetchWrapper(`${api}/Traversal/NextAsync`, fetchOptions(traversalResponse))

const fetchTraversalPrevious = (api) => (traversalId, algoId, nodeId) => {
    var qs = (algoId && nodeId) ? `?algoId=${algoId}&nodeId=${nodeId}` : "";
    return fetchWrapper(`${api}/Traversal/PreviousAsync/${traversalId}${qs}`, fetchOptions(null))
}

const fetchChatStart = (api) => (algoId, release, lang, nodeId, injection, culture) => {
    var qs = startQs(release, lang, nodeId);
    return fetchWrapper(`${api}/Chat/StartAsync/${algoId}${qs}`, fetchOptions(injection, culture))
}

const fetchChatNext = (api) => traversalResponse =>
    fetchWrapper(`${api}/Chat/NextAsync`, fetchOptions(traversalResponse))

const fetchChatPrevious = (api) => (traversalId, algoId, nodeId, assetId) => {
    var qs = (algoId && nodeId && assetId) ? `?algoId=${algoId}&nodeId=${nodeId}&assetId=${assetId}` : "";
    return fetchWrapper(`${api}/Chat/PreviousAsync/${traversalId}${qs}`, fetchOptions(null))
}

///GET
const fetchTraversalContinue = (api) => traversalId => fetchWrapper(`${api}/Traversal/ContinueAsync/${traversalId}`)

const fetchChatContinue = (api) => traversalId => fetchWrapper(`${api}/Chat/ContinueAsync/${traversalId}`)

const fetchTraversalSummary = (api) => traversalId => fetchWrapper(`${api}/Traversal/SummaryAsync/${traversalId}`)

const fetchTraversalConclusion = (api) => traversalId => fetchWrapper(`${api}/Traversal/ConclusionAsync/${traversalId}`)

const fetchTraversalSymptomReport = (api) => traversalId => fetchWrapper(`${api}/Traversal/SymptomReportAsync/${traversalId}`)

const fetchHealthRisks = (hraApi) => (traversalId, ages, conclusions) => {
    const qs = ages.map(age => `ages=${age}`)
        .concat(conclusions.map(conc => `conclusions=${conc}`))
        .join('&');
    return fetchWrapper(`${hraApi}/HealthRisk/${traversalId}?${qs}`)
}

const fetchWellness = (hraApi) => (traversalId, conclusions) => {
    const qs = conclusions.map(conc => `conclusions=${conc}`).join('&');
    return fetchWrapper(`${hraApi}/Wellness/${traversalId}?${qs}`)
}

const fetchProducts = (api) => () => fetchWrapper(`${api}/Products`)

export const createTraversalWebApi = (apiUrl) => {
    return {
        name: "Traversal",
        isConfigured: !!apiUrl,
        getProducts: fetchProducts(apiUrl),
        start: fetchTraversalStart(apiUrl),
        next: fetchTraversalNext(apiUrl),
        previous: fetchTraversalPrevious(apiUrl),
        continue: fetchTraversalContinue(apiUrl),
        summary: fetchTraversalSummary(apiUrl),
        conclusions: fetchTraversalConclusion(apiUrl),
        symptomReport: fetchTraversalSymptomReport(apiUrl)
    }
}

export const createChatWebApi = (apiUrl) => {
    return {
        name: "Chat",
        isConfigured: !!apiUrl,
        getProducts: fetchProducts(apiUrl),
        start: fetchChatStart(apiUrl),
        next: fetchChatNext(apiUrl),
        previous: fetchChatPrevious(apiUrl),
        continue: fetchChatContinue(apiUrl),
        summary: fetchTraversalSummary(apiUrl),
        conclusions: fetchTraversalConclusion(apiUrl),
        symptomReport: fetchTraversalSymptomReport(apiUrl)
    }
}

export const createHealthAssessmentWebApi = (apiUrl) => ({
    name: "Health Assessment",
    isConfigured: !!apiUrl,
    healthRisks: fetchHealthRisks(apiUrl),
    wellness: fetchWellness(apiUrl),
})