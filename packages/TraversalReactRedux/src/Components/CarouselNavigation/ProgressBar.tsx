import React from 'react';
import { Link } from 'react-router-dom';
import Pip from './Pip';
import { Container } from './Container';

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
