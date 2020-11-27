import React from 'react';
import styled from 'styled-components';
import { OpenIcon } from './OpenIcon';

const StyledHeader = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

interface AccordionHeaderProps {
  open: boolean;
  toggleOpen: () => void;
}

const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  open,
  toggleOpen,
  children,
}) => (
  <StyledHeader onClick={toggleOpen}>
    {children}
    <OpenIcon open={open} onClick={toggleOpen} />
  </StyledHeader>
);

export { AccordionHeader };
