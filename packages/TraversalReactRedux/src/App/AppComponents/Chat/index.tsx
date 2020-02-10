import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';

import { GlobalStyle, BodyContent, Title } from '../../../Components';
import Home from '../../Pages/Home';
import Chat from '../../Pages/Chat';
import { ModalConnected as Modal } from '../../../Containers';

const ChatApp: React.FC<{ store: any; history?: any }> = ({
  store,
  history,
}) => {
  if (!history) history = createBrowserHistory();
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyle />
        <BodyContent>
          <Title onClick={() => history.push('/')}>Traversal Chat Client</Title>
          <Route exact path="/" component={Home} />
          <Route path="/traversal/:id?" component={Chat} />
          <Modal />
        </BodyContent>
      </Router>
    </Provider>
  );
};

export default ChatApp;
