
import React from 'react'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { GlobalStyle, BodyContent, Title } from '../../Components'
import { Home, Chat } from '../../Pages'
import { Modal, Summary } from '../../Containers'

const TitleButton = withRouter(({ history }) => (
    <Title onClick={() => history.push("/")}>Traversal Chat Client</Title>
));

export default ({store}) =>
    (<Provider store={store}>
        <Router>
            <>
                <GlobalStyle />
                <BodyContent>
                    <TitleButton />
                    <Route exact path="/" component={Home} />
                    <Route path="/traversal/:id?" component={Chat} />
                    <Summary />
                    <Modal />
                </BodyContent>
            </>
        </Router>
    </Provider>)