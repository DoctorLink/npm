import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    font-family: 'Noto Sans',sans-serif;
    font-weight: bold;
    padding: 16px;
    background-color: #1018D5;
    color: white;
`

export default ({ text }) => (text && <Section>{text}</Section>)