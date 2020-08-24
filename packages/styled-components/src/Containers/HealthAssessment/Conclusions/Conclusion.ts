import styled from 'styled-components';

export const ConclusionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ComparisonContent = styled.div`
  padding: 10px;
`;

export const ConclusionContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: ${(p) => p.theme.healthReportConclusion.fontSize}px;
  line-height: ${(p) => p.theme.healthReportConclusion.lineHeight}px;
  padding: ${(p) => p.theme.healthReportConclusion.verticalPadding}px 0;
`;
