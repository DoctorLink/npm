import { Provider } from 'react-redux';
import React from 'react';
import { Store, AnyAction } from 'redux';
import styled from 'styled-components';
import { defaultTheme, RootTheme, ThemeCreator } from '../../Theme';
import { ThemeProvider } from '../../Components';
import { ModalConnected as Modal } from '../Modal';
import { TraversalAndConclusionsConnected as TraversalAndConclusions } from '../TraversalAndConclusions';
import { ChatTraversalAndConclusionsConnected as ChatTraversalAndConclusions } from '../ChatTraversalAndConclusions';

const Container = styled.div`
  font-family: ${props => props.theme.typography.fontFamily};
`;

Container.defaultProps = {
  theme: defaultTheme,
};

export interface TraversalBaseAppProps {
  theme?: RootTheme | ThemeCreator;
  store: Store<any, AnyAction>;
}

export const AppWrapper: React.FC<TraversalBaseAppProps> = ({
  theme = defaultTheme,
  store,
  children,
}) => (
  <Provider store={store}>
    <ThemeProvider Theme={theme}>
      <Container>
        {children}
        <Modal />
      </Container>
    </ThemeProvider>
  </Provider>
);

export const TraversalApp: React.FC<TraversalBaseAppProps> = ({
  theme = defaultTheme,
  store,
}) => (
  <AppWrapper theme={theme} store={store}>
    <TraversalAndConclusions />
  </AppWrapper>
);

export const ChatTraversalApp: React.FC<TraversalBaseAppProps> = ({
  theme = defaultTheme,
  store,
}) => (
  <AppWrapper theme={theme} store={store}>
    <ChatTraversalAndConclusions />
  </AppWrapper>
);
