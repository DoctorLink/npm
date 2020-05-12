import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import NavigationButtons from '../NavigationButtons';
import { CarouselNav } from './CarouselNav';
import { ProgressBar } from './ProgressBar';

export const CarouselNavigation: React.FC<{ routes: Array<string> }> = ({
  routes,
}) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const routeIndex = routes.indexOf(pathname);
  const previousRoute = routes[routeIndex - 1];
  const nextRoute = routes[routeIndex + 1];
  const previous = previousRoute
    ? () => history.push(previousRoute)
    : undefined;
  const next = nextRoute ? () => history.push(nextRoute) : undefined;

  return (
    <CarouselNav>
      <ProgressBar routes={routes} pathname={pathname} />
      <NavigationButtons previous={previous} next={next} />
    </CarouselNav>
  );
};
