import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import VisibilitySensor from 'react-visibility-sensor';
import styled from 'styled-components';
import { traversalConclusionsGetRequest } from '@doctorlink/traversal-redux';
import colors from '../../Theme/base/colors';
import {
  CarouselNav,
  CarouselContainer,
  Pip,
} from '../../Components/CarouselNavigation';
import NavigationButtons from '../../Components/NavigationButtons';
import { useHRARoutes, HraRouteName } from '../../Hooks';
import { HealthAssessmentPage } from './HealthAssessmentPage';

const A = styled.a`
  cursor: pointer;
`;

const bottomBarHeight = '100px';

const Content = styled.main`
  margin-bottom: ${bottomBarHeight};
  overflow: hidden;
`;

const BottomBar = styled.footer`
  position: fixed;
  top: calc(100% - ${bottomBarHeight});
  left: 0;
  width: 100%;
  height: ${bottomBarHeight};
  background-color: #fff;
  box-shadow: 0 -1px 5px ${colors.grey200};
`;

const HealthAssessment: React.FC<{
  traversalId: string;
}> = ({ traversalId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(traversalConclusionsGetRequest(traversalId));
  }, [dispatch, traversalId]);

  const { routes, initialRoute } = useHRARoutes(traversalId);
  const [currentRoute, setCurrentRoute] = useState<HraRouteName>();
  const [visible, setIsVisible] = useState<boolean>();

  useEffect(() => {
    if (initialRoute) setCurrentRoute(initialRoute);
  }, [initialRoute, setCurrentRoute]);

  // Delay render until we know which page to redirect to
  if (!currentRoute) return null;

  const routeIndex = routes.indexOf(currentRoute);
  const previousRoute = routes[routeIndex - 1];
  const nextRoute = routes[routeIndex + 1];
  const previous = previousRoute
    ? () => setCurrentRoute(previousRoute)
    : undefined;
  const next = nextRoute ? () => setCurrentRoute(nextRoute) : undefined;

  return (
    <div id="Traversal">
      <VisibilitySensor
        partialVisibility={true}
        onChange={(isVisible) => setIsVisible(isVisible)}
      >
        <Content>
          <HealthAssessmentPage
            route={currentRoute}
            traversalId={traversalId}
          />
        </Content>
      </VisibilitySensor>
      {visible && (
        <BottomBar>
          <CarouselNav>
            <CarouselContainer>
              {routes.map((route) => (
                <A
                  key={route}
                  onClick={() => setCurrentRoute(route)}
                  title={route}
                >
                  <Pip selected={route === currentRoute} />
                </A>
              ))}
            </CarouselContainer>
            <NavigationButtons previous={previous} next={next} />
          </CarouselNav>
        </BottomBar>
      )}
    </div>
  );
};

export default HealthAssessment;
