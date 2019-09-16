import styled from 'styled-components'

export default styled.p`
    margin: 0;
    display: block;
    color: rgba(0, 0, 0, 0.87);
    font-size: 1rem;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 400;
    line-height: 1.5;
    font-weight: ${p => p.bold ? 'bold' : 'normal'};
`