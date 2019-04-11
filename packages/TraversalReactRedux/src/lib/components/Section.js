import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    font-family: 'Noto Sans',sans-serif;
    font-weight: bold;
    padding: 10px;
`

export default ({ text }) => (text && <Section>{text}</Section>)