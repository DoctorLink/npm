
import React from 'react'
import { Route, withRouter } from 'react-router-dom'

import styled, { createGlobalStyle } from 'styled-components'
import baseTheme from '../theme/base'

import Traversal from '../containers/Traversal';
import Home from '../containers/Home';
import Modal from '../containers/Modal';
import Summary from '../containers/Summary';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i');

    html, body, #root {
        height: 100%;
        margin: 0
    }

    html {
        scroll-behavior: smooth;
    }

    .body {
        position: relative;
        min-height: 100%;
        padding-bottom: 92px;
    }

`

const TitleContent = styled.h1`
    font-family: ${baseTheme.typography.fontFamily};
    cursor: pointer;
`

const Title = withRouter(({ history }) => (
    <TitleContent onClick={() => history.push("/")}>Traversal Client</TitleContent>
));

const BodyContent = styled.div`
    margin: 0 auto;
    max-width: 1240px;
    width: 100%;
    display: table;
    padding: 40px 20px;
    /* overflow: hidden; */
    box-sizing: border-box;
`

export default () =>
    (<>
        <GlobalStyle />
        <BodyContent>
            <Title />
            <Route exact path="/" component={Home} />
            <Route path="/traversal/:id?" component={Traversal} />
            <Summary />
            <Modal />
        </BodyContent>
    </>)