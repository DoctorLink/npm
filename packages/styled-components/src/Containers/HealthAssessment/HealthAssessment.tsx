import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { traversalConclusionsGetRequest } from '@doctorlink/traversal-redux';
import { CarouselNavigation } from '../../Components';
import colors from '../../Theme/base/colors';
import Risks from './Risks/Risks';
import HealthAge from './HealthAge/HealthAge';
import Wellbeing from './Wellbeing/Wellbeing';
import ActionsAndNumbers from './ActionsAndNumbers/ActionsAndNumbers';
import { useHRARoutes, HraRouteName } from '../../Hooks';
import ComparisonReport from './ComparisonReport/ComparisonReport';

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

  // Delay render until we know which page to redirect to
  if (!initialRoute) return null;

  const basePath = `/traversal/${traversalId}`;
  const resolveRoute = (route: HraRouteName) => `${basePath}/${route}`;

  return (
    <div id="Traversal">
      <Content>
        <Switch>
          <Route
            path={`${basePath}/health-age`}
            render={() => <HealthAge traversalId={traversalId} />}
          />
          <Route
            path={`${basePath}/risks`}
            render={() => <Risks traversalId={traversalId} />}
          />
          <Route
            path={`${basePath}/wellbeing`}
            render={() => <Wellbeing traversalId={traversalId} />}
          />
          <Route
            path={`${basePath}/my-numbers`}
            component={ActionsAndNumbers}
          />
          <Route
            path={`${basePath}/comparison-report`}
            render={() => <ComparisonReport traversal={traversalId} />}
          />
          {initialRoute && (
            <Route
              render={() => <Redirect to={resolveRoute(initialRoute)} />}
            />
          )}
        </Switch>
      </Content>
      <BottomBar>
        <CarouselNavigation routes={routes.map(resolveRoute)} />
      </BottomBar>
    </div>
  );
};

export default HealthAssessment;
