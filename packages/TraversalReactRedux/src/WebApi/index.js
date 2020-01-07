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

///POST
const fetchTraversalStart = (api) => (algoId, release, lang, nodeId, injection, culture) => {
    var qs = startQs(release, lang, nodeId);
    return fetch(`${api}/Traversal/StartAsync/${algoId}${qs}`, fetchOptions(injection, culture))
        .then(response => response.json())
}

const fetchTraversalNext = (api) => traversalResponse =>
    fetch(`${api}/Traversal/NextAsync`, fetchOptions(traversalResponse))
        .then(response => response.json())

const fetchTraversalPrevious = (api) => (traversalId, algoId, nodeId) => {
    var qs = (algoId && nodeId) ? `?algoId=${algoId}&nodeId=${nodeId}` : "";
    return fetch(`${api}/Traversal/PreviousAsync/${traversalId}${qs}`, fetchOptions(null))
        .then(response => response.json())
}

const fetchChatStart = (api) => (algoId, release, lang, nodeId, injection, culture) => {
    var qs = startQs(release, lang, nodeId);
    return fetch(`${api}/Chat/StartAsync/${algoId}${qs}`, fetchOptions(injection, culture))
        .then(response => response.json())
}

const fetchChatNext = (api) => traversalResponse =>
    fetch(`${api}/Chat/NextAsync`, fetchOptions(traversalResponse))
        .then(response => response.json())

const fetchChatPrevious = (api) => (traversalId, algoId, nodeId, assetId) => {
    var qs = (algoId && nodeId && assetId) ? `?algoId=${algoId}&nodeId=${nodeId}&assetId=${assetId}` : "";
    return fetch(`${api}/Chat/PreviousAsync/${traversalId}${qs}`, fetchOptions(null))
        .then(response => response.json())
}

///GET
const fetchTraversalContinue = (api) => traversalId =>
    fetch(`${api}/Traversal/ContinueAsync/${traversalId}`)
        .then(response => response.json())

const fetchChatContinue = (api) => traversalId =>
    fetch(`${api}/Chat/ContinueAsync/${traversalId}`)
        .then(response => response.json())

const fetchTraversalSummary = (api) => traversalId =>
    fetch(`${api}/Traversal/SummaryAsync/${traversalId}`)
        .then(response => response.json())

const fetchTraversalConclusion = (api) => traversalId =>
    fetch(`${api}/Traversal/ConclusionAsync/${traversalId}`)
        .then(response => response.json())

const fetchTraversalSymptomReport = (api) => traversalId =>
    fetch(`${api}/Traversal/SymptomReportAsync/${traversalId}`)
        .then(response => response.json())

const fetchHealthRisks = (hraApi) => (traversalId, ages, conclusions) => {
    const qs = ages.map(age => `ages=${age}`)
        .concat(conclusions.map(conc => `conclusions=${conc}`))
        .join('&');
    return fetch(`${hraApi}/HealthRisk/${traversalId}?${qs}`)
        .then(response => response.json());
}

const fetchWellness = (hraApi) => (traversalId, conclusions) => {
    const qs = conclusions.map(conc => `conclusions=${conc}`).join('&');
    return fetch(`${hraApi}/Wellness/${traversalId}?${qs}`)
        .then(response => response.json());
}

const fetchProducts = (api) => () =>
    fetch(`${api}/Products`)
        .then(response => response.json())

export const createTraversalWebApi = (apiUrl) => {
    return {
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
    isConfigured: !!apiUrl,
    healthRisks: fetchHealthRisks(apiUrl),
    wellness: fetchWellness(apiUrl),
})