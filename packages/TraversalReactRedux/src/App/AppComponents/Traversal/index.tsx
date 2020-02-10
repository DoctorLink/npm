import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';

import { GlobalStyle, BodyContent, Title } from '../../../Components';
import Home from '../../Pages/Home';
import Traversal from '../../Pages/Traversal';
import { ModalConnected as Modal } from '../../../Containers';

const TraversalApp: React.FC<{ store: any; history?: any }> = ({
  store,
  history,
}) => {
  if (!history) history = createBrowserHistory();
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyle />
        <BodyContent>
          <Title onClick={() => history.push('/')}>Traversal Client</Title>
          <Route exact path="/" component={Home} />
          <Route path="/traversal/:id?" component={Traversal} />
          <Modal />
        </BodyContent>
      </Router>
    </Provider>
  );
};

export default TraversalApp;
