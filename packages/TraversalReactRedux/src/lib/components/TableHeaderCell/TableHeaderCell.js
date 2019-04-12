import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: ${props => props.justifyContent || 'flex-start' };
`

const DisplayText = styled.div`
    display: inline-block;
    padding: 10px;
    font-family: 'Noto Sans',sans-serif;
    font-weight: normal;
    text-align: left;
`

const ErrorText = styled.div`
    font-size: 12px;
    padding: 0 10px 10px;
    font-family: 'Noto Sans',sans-serif;
    color: red;
    text-align: left;
`

export default ({ text, error, children, justifyContent }) => 
    (<th>
        <Container justifyContent={justifyContent}>
            <DisplayText dangerouslySetInnerHTML={{ __html: text }}/>
            {children}
        </Container>
        {error && <ErrorText>{error.text}</ErrorText>}
    </th>)