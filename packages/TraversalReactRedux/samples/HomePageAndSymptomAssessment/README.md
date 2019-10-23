## HomePage and Symptom Assessment App

This example assumes a starting point of create-react-app or equivalent.
It will also utilise Redux, Redux Sagas and React Router as well as this package.
```
 yarn add redux react-redux redux-saga react-router-dom @doctorlink/traversal-react-redux
```

### First we need to create a store
We import some functions from redux and redux sagas along with our traversal reducers.
```javascript
import { createStore, applyMiddleware, combineReducers } from  'redux';
import  createSagaMiddleware  from  'redux-saga';
import {
	traversalReducer,
	summaryReducer,
	conclusionReducer,
	modalReducer
} from  '@doctorlink/traversal-react-redux';
```
 Then we combine our reducers, create our saga middleware and create our store.
```javascript
const  rootReducer  =  combineReducers({
	traversal:  traversalReducer,
	summary:  summaryReducer,
	conclusion:  conclusionReducer,
	modal:  modalReducer
}); 
 
const  sagaMiddleware  =  createSagaMiddleware();

const  store  =  createStore(rootReducer, applyMiddleware(sagaMiddleware));
```
Now we have a store made up of our traversal reducers that also includes the saga middleware.

### Next we need to create our Saga
We import the "all" effect from redux sagas along with our traversal effects, web api and the createBroweserHistory methods.
```javascript
import { all } from  'redux-saga/effects';
import {
    createTraversalWebApi,
    createBrowserHistory,
    createTraversalClassicEffects,
    createTraversalClassicSetEffects,
	createSummaryEffects,
    createSymptomAssessmentEffects,
    createHistoryPushEffects
} from  '@doctorlink/traversal-react-redux';
```
 We create a traversal web api object by passing the api url into the function and create a history object, both of which are passed into the relevent effects methods. Then create a root saga generator function that yields all of the effects created by the effects methods. Finally we use the previously created Saga middleware to run our root reducer.
```javascript
const  traversalApi  =  createTraversalWebApi("https://api-traversal.doctorlink.engineering");

const history = createBrowserHistory();

const  rootSaga  =  function*  rootSaga() {
	yield  all([
        ...createTraversalClassicEffects(traversalApi),
        ...createTraversalClassicSetEffects(),
        ...createSummaryEffects(traversalApi),
        ...createSymptomAssessmentEffects(traversalApi),
        ...createHistoryPushEffects(history)
	])
};

sagaMiddleware.run(rootSaga);
```
Now our sagas are created and our store's saga middleware is running it. We are ready to make our app.

### Create a homepage
First we will create a simple Homepage with just a button to start a symptom assessment.
Import react-redux's connect method and the actions from our package. 
```javascript
import { connect } from  'react-redux'
import { actions } from  "@doctorlink/traversal-react-redux";
```
We create a component with a button that dispatches the start action to our store.
```javascript
const Home = ({dispatch}) => 
    (<button onClick={() => dispatch(actions.traversalStart("1", "2019.2.1", "EN", "", ""))}>Begin</button>)
const HomePage = connect()(Home)
```

### Create a component theme
The components in our package can the themed easily using the createTheme method.
Import the createTheme method from our package. 
```javascript
import { createTheme } from  '@doctorlink/traversal-react-redux';
```
We create a theme that overides the default brand colors and font.
```javascript
const theme = createTheme({
    colors: {
        brand50: '#edecec',
        brand100: '#32443E',
        brand200: '#708673',
        lightBlue100: '#ecad00',
    },
    typography: {
        fontFamily: 'sans-serif'
    },
});
```

### Put it all together
Now we have all the pieces we need to assemble this app, we just need to import a few more components.
Import Provider from react-redux, Router and Route from react-router-dom and the ThemeProvider, TraversalPage, ConnectedSummary and ConnectedModal from our package.
```javascript
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { ThemeProvider, TraversalPage, ConnectedSummary, ConnectedModal } from  '@doctorlink/traversal-react-redux';
```
Now we can scaffold our applicationa and render it. We pass our store to teh Provider, then the history to our Router and add a route for the HomePage we created. Next we add a ThemeProvider and pass our theme into it, with a route that renders our TraversalPage along with a ConnectedSummary and ConnectedModal.
```javascript
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route exact path="/" render={() => <HomePage history={history}></HomePage>} />
            <ThemeProvider Theme={theme}>
                <Route path="/traversal/:id?" component={TraversalPage} />
                <ConnectedSummary />
                <ConnectedModal />
            </ThemeProvider>
        </Router>
    </Provider>,
    document.getElementById('root')
);
```

Now we have a simple app that consists of a Homepage with a button that starts a symptom assessment and directs you to the traversalpage.

The full code example can be seen [here](index.js) 