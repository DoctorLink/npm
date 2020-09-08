import React, { useState, ChangeEvent } from 'react';
import { StyledPanelBlock } from './SummaryPanel';
import { HealthComparisonSnapshot } from '@doctorlink/traversal-core';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { hraComparisonReportGetRequest } from '@doctorlink/traversal-redux';
import { InlineDropdown } from '../Dropdown';
import CompareRiskChart from './CompareRiskChart';

const ageOptions = [80, 90, 100, 110];

interface CompareRiskChartsProps {
  currentSnapshot: HealthComparisonSnapshot;
  previousSnapshot: HealthComparisonSnapshot;
  currentTitle: string;
  pastTitle: string;
}

const FlexBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  font-size: ${(p) => p.theme.typography.regular.size}px;
  font-weight: 600;
  margin-bottom: ${(p) => p.theme.spacing.padding}px;
`;

const Right = styled.div`
  padding-left: 10px;
`;

const CompareRiskCharts: React.FC<CompareRiskChartsProps> = ({
  currentSnapshot,
  previousSnapshot,
  currentTitle,
  pastTitle,
}) => {
  const [selectedAge, setSelectedAge] = useState(90);
  const dispatch = useDispatch();
  const onDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = +e.target.value;
    setSelectedAge(value);
    dispatch(
      hraComparisonReportGetRequest(
        currentSnapshot.traversalId,
        previousSnapshot.traversalId,
        value
      )
    );
  };
  const currentRisks = currentSnapshot && currentSnapshot.riskOutput.risks;
  const prevRisks = previousSnapshot && previousSnapshot.riskOutput.risks;

  return (
    <StyledPanelBlock>
      <FlexBox>
        <div>Health risks before the age of</div>
        <Right>
          <InlineDropdown
            options={ageOptions}
            value={selectedAge}
            onChange={onDropdownChange}
          />
        </Right>
      </FlexBox>
      <CompareRiskChart
        style={{ marginRight: '8px' }}
        title={currentTitle}
        risks={currentRisks}
      />
      <CompareRiskChart
        style={{ marginLeft: '8px' }}
        title={pastTitle}
        risks={prevRisks}
      />
    </StyledPanelBlock>
  );
};

export default CompareRiskCharts;
