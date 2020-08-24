import React, { useState, ChangeEvent } from 'react';
import {
  PanelContent,
  InlineDropdown,
  RiskChart,
  UpdateWhenVisible,
} from '../../../Components';
import { useRiskSummary } from '../../../Hooks';
import HealthReportTitle from '../../../Components/HealthReportTitle';
import styled from 'styled-components';

const AgeOptions = [50, 60, 70, 80, 90, 100, 110];

const FlexBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: ${(p) => p.theme.typography.regular.size}px;
  font-weight: 600;
  margin-bottom: ${(p) => p.theme.spacing.padding}px;
`;

const Right = styled.div`
  padding-right: 1%;
`;

const Header = styled.div`
  line-height: 2;
`;

const StyledPanelContent = styled(PanelContent)`
  @media screen and (max-width: 799px) {
    margin-top: -16px;
  }
`;

interface RiskScoresProps {
  traversalId: string;
}

const RiskScores: React.FC<RiskScoresProps> = ({ traversalId }) => {
  const [selectedAge, setSelectedAge] = useState(90);
  const riskSummary = useRiskSummary(traversalId, AgeOptions);
  if (!riskSummary) return null;

  const { age, risks } = riskSummary;
  const visibleAgeOptions = AgeOptions.filter((option) => option > age);
  const selectedTimescale = selectedAge - age;
  const selectedRisks = risks.filter((risk) => risk.time === selectedTimescale);

  const onDropdownChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setSelectedAge(+e.target.value);
  return (
    <React.Fragment>
      <StyledPanelContent>
        <Header>
          <HealthReportTitle>My health risks</HealthReportTitle>
          <FlexBox>
            <div>Your risks before the age of</div>
            <Right>
              <InlineDropdown
                options={visibleAgeOptions}
                value={selectedAge}
                onChange={onDropdownChange}
              />
            </Right>
          </FlexBox>
        </Header>
        <UpdateWhenVisible offset={{ top: -30 }}>
          <RiskChart risks={selectedRisks} />
        </UpdateWhenVisible>
      </StyledPanelContent>
    </React.Fragment>
  );
};

export default RiskScores;
