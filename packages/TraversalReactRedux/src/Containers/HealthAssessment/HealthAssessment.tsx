import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { traversalConclusionGet } from '../../Actions';
import { CarouselNavigation } from '../../Components';
import colors from '../../Theme/base/colors';
import Risks from './Risks/Risks';
import HealthAge from './HealthAge/HealthAge';
import Wellbeing from './Wellbeing/Wellbeing';
import ActionsAndNumbers from './ActionsAndNumbers/ActionsAndNumbers';
import AdditionalInfo from './AdditionalInfo/AdditionalInfo';
import { useHRARoutes } from './Hooks';

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
  traversalId: any;
  dispatch: any;
}> = ({ traversalId, dispatch }) => {
  useEffect(() => {
    dispatch(traversalConclusionGet(traversalId));
  }, [dispatch, traversalId]);

  const { routes, initialRoute } = useHRARoutes(traversalId);

  // Delay render until we know which page to redirect to
  if (!initialRoute) return null;

  const basePath = `/traversal/${traversalId}`;
  const resolveRoute = (route: any) => `${basePath}/${route}`;

  return (
    <div id="Traversal">
      <Content>
        <h2>Global Health Check Scores</h2>
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
          <Route path={`${basePath}/info`} component={AdditionalInfo} />
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

export default connect()(HealthAssessment);
