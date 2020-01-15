export default () => function* webApiNotOk(action) {
    console.log("There was an error on api call " + action.apiCall);
    console.log(action.response);
    // if (action.response.bodyUsed)
    //     console.log(yield action.response.json());
    alert("There was an error on api call " + action.apiCall);
}