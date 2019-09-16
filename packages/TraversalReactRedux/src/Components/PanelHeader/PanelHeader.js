import styled from 'styled-components'

export default styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding-top: 16px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    background-color: ${p => p.color || '#666'};

    @media screen and (min-width: 800px) {    
        padding-left: 24px;
        padding-right: 24px;
    }
`