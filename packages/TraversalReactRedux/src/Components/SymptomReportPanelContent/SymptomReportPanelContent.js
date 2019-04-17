import styled from 'styled-components'

export default styled.div`
    box-sizing: border-box;
    padding: 16px;

    &:last-child {
        /* padding-bottom: 24px; */
    }

    @media screen and (min-width: 800px) {    
        padding-left: 24px;
        padding-right: 24px;
    }
`