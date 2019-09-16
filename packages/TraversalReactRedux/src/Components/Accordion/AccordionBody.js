import React, { useRef } from 'react';
import styled from "styled-components";

const StyledBody = styled.div`
    padding-top: 1.5rem;
`

const Expandable = styled.div`
    overflow: hidden;
    transition: height 0.3s;
`

const AccordionBody = ({ open, children }) => {
    const ref = useRef();
    const scrollHeight = ref.current && ref.current.scrollHeight;
    const height = open ? scrollHeight : 0;
    return (
        <Expandable ref={ref} style={{ height }}>
            <StyledBody>
                {children}
            </StyledBody>
        </Expandable>
    )
};

export { AccordionBody };