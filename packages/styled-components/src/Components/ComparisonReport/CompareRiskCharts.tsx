import React, { useState, ChangeEvent } from 'react';
import { StyledPanelBlock } from './SummaryPanel';
import { HealthComparisonSnapshot } from '@doctorlink/traversal-core';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { hraComparisonReportGetRequest } from '@doctorlink/traversal-redux';
import { InlineDropdown } from '../Dropdown';
import CompareRiskChart from './CompareRiskChart';
import ToggleAssessment from './ToggleAssessment';

const ageOptions = [80, 90, 100, 110];

const FlexBox = styled.div<{ mobileView?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${(p) => (p.mobileView ? 'flex-start' : 'flex-end')};
  align-items: center;
  font-size: ${(p) => p.theme.typography.regular.size}px;
  font-weight: 600;
  margin-bottom: ${(p) => p.theme.spacing.padding}px;
`;

const Right = styled.div`
  padding-left: 10px;
`;

interface CompareRiskChartsProps {
  currentSnapshot: HealthComparisonSnapshot;
  previousSnapshot: HealthComparisonSnapshot;
  currentTitle?: string;
  previousTitle?: string;
  mobileView?: boolean;
}

const CompareRiskCharts: React.FC<CompareRiskChartsProps> = ({
  currentSnapshot,
  previousSnapshot,
  currentTitle,
  previousTitle,
  mobileView,
}) => {
  const [selectedAge, setSelectedAge] = useState(90);
  const dispatch = useDispatch();
  const age = currentSnapshot.riskOutput.age;
  const visibleAgeOptions = ageOptions.filter((option) => option > age);
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

  const [active, setActive] = useState('current');
  const marginLeft = !mobileView ? '8px' : '0px';
  const marginRight = !mobileView ? '8px' : '0px';
  return (
    <StyledPanelBlock>
      <FlexBox mobileView={mobileView}>
        <div>Health risks before the age of</div>
        <Right>
          <InlineDropdown
            options={visibleAgeOptions}
            value={selectedAge}
            onChange={onDropdownChange}
          />
        </Right>
      </FlexBox>

      {(active === 'current' || !mobileView) && (
        <CompareRiskChart
          style={{ marginRight: marginRight }}
          title={currentTitle}
          risks={currentRisks}
          mobileView={mobileView}
        />
      )}

      {(active === 'previous' || !mobileView) && (
        <CompareRiskChart
          style={{ marginLeft: marginLeft }}
          title={previousTitle}
          risks={prevRisks}
          mobileView={mobileView}
        />
      )}
      <ToggleAssessment
        active={active}
        onSetActive={setActive}
        currentTitle={currentTitle}
        previousTitle={previousTitle}
      />
    </StyledPanelBlock>
  );
};

export default CompareRiskCharts;
