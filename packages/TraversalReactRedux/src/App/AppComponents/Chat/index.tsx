import React from 'react';
import { Router, Route } from 'react-router-dom';
import { History, createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { Store } from 'redux';

import { GlobalStyle, BodyContent, Title } from '../../../Components';
import Home from '../../Pages/Home';
import Chat from '../../Pages/Chat';
import { ModalConnected as Modal } from '../../../Containers';
import { ChatRootState } from '../../../Models';

export interface ChatAppProps {
  store: Store<ChatRootState>;
  history?: History;
}

const ChatApp: React.FC<ChatAppProps> = ({ store, history }) => {
  if (!history) history = createBrowserHistory();
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyle />
        <BodyContent>
          <Title onClick={() => history!.push('/')}>
            Traversal Chat Client
          </Title>
          <Route exact path="/" component={Home} />
          <Route path="/traversal/:id?" component={Chat} />
          <Modal />
        </BodyContent>
      </Router>
    </Provider>
  );
};

export default ChatApp;
