import React from 'react'
import styled, { keyframes } from 'styled-components'

const animation = keyframes`
    0% {
        transform: translate3d(0, 0, 0);
    }
    25% {
        transform: translate3d(0, -5px, 0);
    }
    50% {
        transform: translate3d(0, 0, 0);
    }
    100% {
        transform: translate3d(0, 0, 0);
    }
`;

const DotsContainer = styled.div`
    width: 40px;
    display: flex;
    justify-content: space-between;
`;

const Dot = styled.div`
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: black;;
    opacity: 0.6;
    animation: ${animation} 1.2s ${props => props.delay}s infinite ease-out;
`;

export default () => (
    <DotsContainer>
        <Dot delay={0} />
        <Dot delay={0.15} />
        <Dot delay={0.3} />
    </DotsContainer>
);