import React from 'react';
import { Conclusion } from '@doctorlink/traversal-core';
import { HealthReportTitle, PanelContent } from '../../../Components';
import NonCheckableConclusions from '../Conclusions/NonCheckableConclusions';
import { ConclusionContent } from '../Conclusions/Conclusion';
import { useRestrictedList } from '../../../Hooks';
import styled from 'styled-components';

const StyledLink = styled.a`
  cursor: pointer;
  color: ${(p) => p.theme.colors.linkBlue};
  text-decoration: underline;
`;

export const AdditionalInfo: React.FC<{
  additionalConclusions: Conclusion[];
  restrictList?: number;
}> = ({ additionalConclusions, restrictList }) => {
  const {
    isRestricted,
    restrictedItems,
    showAll,
    toggleShowAll,
  } = useRestrictedList(additionalConclusions, restrictList);

  return (
    <PanelContent>
      <HealthReportTitle>Additional Information</HealthReportTitle>
      <NonCheckableConclusions conclusions={restrictedItems} />
      {isRestricted && (
        <ConclusionContent>
          <StyledLink onClick={toggleShowAll}>
            {showAll ? 'View less' : 'View more additional information'}
          </StyledLink>
        </ConclusionContent>
      )}
    </PanelContent>
  );
};
