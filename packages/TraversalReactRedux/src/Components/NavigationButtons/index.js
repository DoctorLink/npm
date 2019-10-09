import React from 'react'
import styled from 'styled-components'
import { withRouter } from "react-router";
import Button from '../Button'

const ButtonContainer = styled.div`
    margin: 0 10px;
    ${Button}:not(:last-child) {
        margin-right: 10px;
    }
`
const NavigationButtons = ({ history, previousRoute, nextRoute }) => (
    <ButtonContainer>
        {previousRoute && <Button onClick={() => history.push(previousRoute)}>Back</Button>}
        {nextRoute && <Button onClick={() => history.push(nextRoute)}>Next</Button>}
    </ButtonContainer>
)

export default withRouter(NavigationButtons);
