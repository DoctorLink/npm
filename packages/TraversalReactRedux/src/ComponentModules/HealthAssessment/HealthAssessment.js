import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { Switch, Route, Redirect } from 'react-router-dom'
import styled from "styled-components";
import { traversalConclusionGet, hraConclusionsGet } from '../../Actions';
import { CarouselNavigation } from '../../Components';
import colors from '../../Theme/base/colors'
import Risks from './Risks/Risks';
import HealthAge from './HealthAge/HealthAge';
import Wellbeing from './Wellbeing/Wellbeing';
import MyNumbers from './MyNumbers/MyNumbers';
import AdditionalInfo from './AdditionalInfo/AdditionalInfo';

const bottomBarHeight = "100px";

const Content = styled.main`
    margin-bottom: ${bottomBarHeight};
    overflow: hidden;
`

const BottomBar = styled.footer`
    position: fixed;
    top: calc(100% - ${bottomBarHeight});
    left: 0;
    width: 100%;
    height: ${bottomBarHeight};
    background-color: #fff;
    box-shadow: 0 -1px 5px ${colors.grey200};
`

const HealthAssessment = ({ traversalId, dispatch }) => {
    useEffect(() => { dispatch(traversalConclusionGet(traversalId)) }, [traversalId]);
    useEffect(() => { dispatch(hraConclusionsGet()) }, []);

    const basePath = `/traversal/${traversalId}`;
    return (
        <div>
            <Content>
                <h2>Global Health Check Scores</h2>
                <Switch>
                    <Route path={`${basePath}/health-age`} render={() => <HealthAge traversalId={traversalId} />} />
                    <Route path={`${basePath}/risks`} render={() => <Risks traversalId={traversalId} />} />
                    <Route path={`${basePath}/wellbeing`} render={() => <Wellbeing traversalId={traversalId} />} />
                    <Route path={`${basePath}/my-numbers`} component={MyNumbers} />
                    <Route path={`${basePath}/info`} component={AdditionalInfo} />
                    <Route render={() => <Redirect to={`${basePath}/health-age`} />} />
                </Switch>
            </Content>
            <BottomBar>
                <CarouselNavigation
                    routes={[
                        `${basePath}/health-age`,
                        `${basePath}/risks`,
                        `${basePath}/wellbeing`,
                        `${basePath}/my-numbers`,
                        `${basePath}/info`
                    ]}
                />
            </BottomBar>
        </div>
    )
}

export default connect()(HealthAssessment);
