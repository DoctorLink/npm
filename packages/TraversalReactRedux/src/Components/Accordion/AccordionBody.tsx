import React, { useRef } from 'react';
import styled from 'styled-components';

const StyledBody = styled.div`
  padding-top: 1.5rem;
`;

const Expandable = styled.div`
  overflow: hidden;
  transition: height 0.3s;
`;

const AccordionBody: React.FC<{ open: any; children: any }> = ({
  open,
  children,
}) => {
  const ref = useRef<HTMLElement>();
  const scrollHeight = ref.current && ref.current.scrollHeight;
  const height = open ? scrollHeight : 0;
  return (
    <Expandable ref={ref as any} style={{ height }}>
      <StyledBody>{children}</StyledBody>
    </Expandable>
  );
};

export { AccordionBody };
