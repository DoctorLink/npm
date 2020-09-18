import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { HealthRisksModel } from '@doctorlink/traversal-core';
import { InlineDropdown } from '../Dropdown';
import RiskChart from './RiskChart';

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

interface InteractiveRiskChartProps {
  riskSummary: HealthRisksModel;
}

export const InteractiveRiskChart: React.FC<InteractiveRiskChartProps> = ({
  riskSummary,
}) => {
  const [selectedAge, setSelectedAge] = useState(90);
  const { age, risks } = riskSummary;
  const visibleAgeOptions = AgeOptions.filter((option) => option > age);
  const selectedTimescale = selectedAge - age;
  const selectedRisks = risks.filter((risk) => risk.time === selectedTimescale);

  const onDropdownChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setSelectedAge(+e.target.value);
  return (
    <>
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
      <RiskChart risks={selectedRisks} />
    </>
  );
};
