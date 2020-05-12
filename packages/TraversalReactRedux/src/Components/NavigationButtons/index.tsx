import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const ButtonContainer = styled.div`
  margin: 0 10px;
  ${Button}:not(:last-child) {
    margin-right: 10px;
  }
`;

interface props {
  previous: any;
  next: any;
}

const NavigationButtons: React.FC<props> = ({ previous, next }) => {
  return (
    <ButtonContainer>
      {previous && <Button onClick={previous}>Back</Button>}
      {next && <Button onClick={next}>Next</Button>}
    </ButtonContainer>
  );
};

export default NavigationButtons;
