import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import colors from '../../Theme/base/colors';

const pipDiameter = 10;

interface Props {
  selected: boolean;
}

const Pip = styled.div<Props>`
  display: inline-block;
  width: ${pipDiameter}px;
  height: ${pipDiameter}px;
  border-radius: ${pipDiameter / 2}px;
  background-color: #d2d2d2;
  box-shadow: inset 0 2px 2px #a4a4a4;
  margin: ${pipDiameter / 2}px;
  transition: all 0.3s;

  ${p =>
    p.selected &&
    css`
      background-color: ${colors.brand100};
      box-shadow: none;
    `}
`;

const Container = styled.div`
  margin: 5px 0;
`;

export const ProgressBar: React.FC<{ routes: any; pathname: any }> = ({
  routes,
  pathname,
}) => (
  <Container>
    {routes.map((route: any) => (
      <Link key={route} to={route}>
        <Pip selected={route === pathname} />
      </Link>
    ))}
  </Container>
);
