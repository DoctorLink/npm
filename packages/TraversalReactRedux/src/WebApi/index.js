const fetchOptions = body => ({
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
})

///POST
const fetchTraversalStart = (api) => (algoId, nodeId) => {
    var qs = nodeId ? `?nodeId=${nodeId}` : "";
    return fetch(`${api}/Traversal/StartAsync/${algoId}${qs}`, fetchOptions(null))
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

const fetchChatStart = (api) => (algoId, nodeId) => {
    var qs = nodeId ? `?nodeId=${nodeId}` : "";
    return fetch(`${api}/Chat/StartAsync/${algoId}${qs}`, fetchOptions(null))
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

export const createTraversalWebApi = (apiUrl) => {
    return {
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
        start: fetchChatStart(apiUrl),
        next: fetchChatNext(apiUrl),
        previous: fetchChatPrevious(apiUrl),
        continue: fetchChatContinue(apiUrl),
        summary: fetchTraversalSummary(apiUrl),
        conclusions: fetchTraversalConclusion(apiUrl),
        symptomReport: fetchTraversalSymptomReport(apiUrl)
    }
}