import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Expandable = styled.div`
  overflow: hidden;
  transition: height 0.3s;
`;

const AccordionBody: React.FC<{ open: boolean }> = ({ open, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollHeight, setScrollHeight] = useState<number>();

  useEffect(() => {
    setScrollHeight(ref.current?.scrollHeight);
  }, [ref.current]);

  const height = open ? scrollHeight : 0;
  return (
    <Expandable ref={ref} style={{ height }}>
      {children}
    </Expandable>
  );
};

export { AccordionBody };
