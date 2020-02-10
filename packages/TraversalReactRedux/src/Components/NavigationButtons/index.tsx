import React from 'react';
import styled from 'styled-components';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Button from '../Button';

const ButtonContainer = styled.div`
  margin: 0 10px;
  ${Button}:not(:last-child) {
    margin-right: 10px;
  }
`;

interface props extends RouteComponentProps {
  previousRoute: any;
  nextRoute: any;
}

const NavigationButtons: React.FC<props> = ({
  history,
  previousRoute,
  nextRoute,
}) => {
  return (
    <ButtonContainer>
      {previousRoute && (
        <Button onClick={() => history.push(previousRoute)}>Back</Button>
      )}
      {nextRoute && (
        <Button onClick={() => history.push(nextRoute)}>Next</Button>
      )}
    </ButtonContainer>
  );
};

export default withRouter(NavigationButtons);
