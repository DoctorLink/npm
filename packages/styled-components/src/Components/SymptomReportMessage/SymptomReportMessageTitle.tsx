import styled from 'styled-components';

export const SymptomReportMessageTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: ${(p) => p.theme.symptomReport.messageTitle.fontWeight};
  font-size: ${(p) => p.theme.symptomReport.messageTitle.fontSize}px;
  font-family: ${(p) => p.theme.symptomReport.messageTitle.fontFamily};
  line-height: ${(p) => p.theme.symptomReport.messageTitle.lineHeight}px;
  padding-bottom: ${(p) => p.theme.symptomReport.messageTitle.paddingBottom}px;
`;
