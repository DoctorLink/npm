import { PanelContent } from '..';
import PanelBox from '../PanelBox';
import styled from 'styled-components';
import { defaultTheme } from '../../Theme';
import ComparisonReportTitle from '../ComparisonReportTitle';

export const StyledPanelContent = styled(PanelContent)`
  padding: 16px 0;
  @media screen and (min-width: 800px) {
    padding: ${(p) => p.theme.panelcontent.padding}px;
  }
`;

StyledPanelContent.defaultProps = {
  theme: defaultTheme,
};

export const StyledPanelBox = styled(PanelBox)`
  overflow: auto;
  @media screen and (min-width: 800px) {
    min-height: 470px;
    max-height: 485px;
  }
  padding-top: 13px;
`;

export const StyledPanelBlock = styled.div`
  padding-top: 30px;
`;

export const StyledReportTitle = styled(ComparisonReportTitle)`
  color: ${(p) => p.theme.healthreporttitle.color};
  padding-top: 10px;
`;

StyledReportTitle.defaultProps = {
  theme: defaultTheme,
};

export const ComparisonPanel = styled(PanelBox)`
  @media screen and (min-width: 800px) {
    width: 49.22%;
    float: left;
  }
`;
