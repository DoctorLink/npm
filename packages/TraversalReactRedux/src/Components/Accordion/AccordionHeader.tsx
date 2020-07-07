import React from 'react';
import styled from 'styled-components';
import { OpenIcon } from './OpenIcon';

const StyledHeader = styled.div`
  cursor: pointer;
`;

const AccordionHeader: React.FC<{
  open: any;
  toggleOpen: any;
}> = ({ open, toggleOpen, children }) => (
  <StyledHeader onClick={toggleOpen}>
    {children}
    <OpenIcon open={open} />
  </StyledHeader>
);

export { AccordionHeader };
