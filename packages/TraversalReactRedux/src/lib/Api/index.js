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
        .then(response => response.json())}

const fetchTraversalNext = (api) => traversalResponse =>
    fetch(`${api}/Traversal/NextAsync`, fetchOptions(traversalResponse))
        .then(response => response.json())
        
const fetchTraversalPrevious = (api) => (traversalId, algoId, nodeId) => {
    var qs = (algoId && nodeId) ? `?algoId=${algoId}&nodeId=${nodeId}` : "";
    return fetch(`${api}/Traversal/PreviousAsync/${traversalId}${qs}`, fetchOptions(null))
        .then(response => response.json())}
        
///GET
const fetchTraversalContinue = (api) => traversalId => 
    fetch(`${api}/Traversal/ContinueAsync/${traversalId}`)
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


export default (apiUrl) => {
    fetchTraversalStart(apiUrl),
    fetchTraversalNext(apiUrl),
    fetchTraversalPrevious(apiUrl),
    fetchTraversalContinue(apiUrl),
    fetchTraversalSummary(apiUrl),
    fetchTraversalConclusion(apiUrl),
    fetchTraversalSymptomReport(apiUrl)
}