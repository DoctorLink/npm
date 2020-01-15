export default () => function* webApiError(action) {
    console.log("There was an error on api call " + action.apiCall);
    console.log(action.error);
    alert("There was an error on api call " + action.apiCall);
}