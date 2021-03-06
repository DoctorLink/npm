import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button } from '../../../Components';
import CompareRiskCharts from '../../../Components/ComparisonReport/CompareRiskCharts';
import CompareWellbeingCharts from '../../../Components/ComparisonReport/CompareWellbeingCharts';
import CompareNumbers from '../../../Components/ComparisonReport/CompareNumbers';
import Summary from '../../../Components/ComparisonReport/Summary';
import {
  hraComparisonReportGetRequest,
  hraComparisonReportGetResponse,
  parseNumberConclusion,
} from '@doctorlink/traversal-redux';
import { useRiskSummary } from '../../../Hooks';
import {
  Text,
  Label,
  Select,
  Content,
} from '../../../Components/ComparisonReport/Fields';
import {
  RootState,
  HealthComparisonSummary,
  HealthRiskModel,
  WellnessScore,
  NumberConclusion,
} from '@doctorlink/traversal-core';

const AgeOptions = [80, 90, 100, 110];

const ComparisonReport: React.FC<{
  traversal: string;
}> = ({ traversal }) => {
  const [selectedAge, setSelectedAge] = useState(80);
  const onDropdownChange = (e: any) => setSelectedAge(e.target.value);
  const dispatch = useDispatch();

  const riskSummary = useRiskSummary(traversal, AgeOptions);
  const { age } = riskSummary;
  const visibleAgeOptions = AgeOptions.filter((option) => option > age);

  const [pastTraversal, setPastTraversal] = useState('');
  const handleSubmit = (event: any) => {
    dispatch(hraComparisonReportGetResponse(null));
    event.preventDefault();
    dispatch(
      hraComparisonReportGetRequest(traversal, pastTraversal, selectedAge)
    );
  };

  const comparisonReport = useSelector(
    (state: RootState) => state.healthAssessment.comparisonReport
  );

  interface compare {
    risks: HealthRiskModel[];
    wellness: WellnessScore[];
    myNumbers: NumberConclusion[];
  }

  const [current, setCurrent] = useState<compare>();
  const [previous, setPrevious] = useState<compare>();
  const [summary, setSummary] = useState<HealthComparisonSummary | null>();

  useEffect(() => {
    if (!comparisonReport) return;
    const currentRiskOutput =
      comparisonReport.currentSnapshot &&
      comparisonReport.currentSnapshot.riskOutput;
    const previousRiskOutput =
      comparisonReport.previousSnapshot &&
      comparisonReport.previousSnapshot.riskOutput;
    const currentWellbeingOutput =
      comparisonReport.currentSnapshot &&
      comparisonReport.currentSnapshot.wellnessOutput;
    const previousWellbeingOutput =
      comparisonReport.previousSnapshot &&
      comparisonReport.previousSnapshot.wellnessOutput;
    const currentConclusions =
      comparisonReport.currentSnapshot &&
      comparisonReport.currentSnapshot.myNumbers;
    const prevConclusions =
      comparisonReport.previousSnapshot &&
      comparisonReport.previousSnapshot.myNumbers;
    setCurrent({
      risks: currentRiskOutput && currentRiskOutput.risks,
      wellness: currentWellbeingOutput && currentWellbeingOutput.scores,
      myNumbers:
        currentConclusions && currentConclusions.map(parseNumberConclusion),
    });
    setPrevious({
      risks: previousRiskOutput && previousRiskOutput.risks,
      wellness: previousWellbeingOutput && previousWellbeingOutput.scores,
      myNumbers: prevConclusions && prevConclusions.map(parseNumberConclusion),
    });
    setSummary(comparisonReport.summary);
  }, [comparisonReport]);

  return (
    <>
      <h2>Comparison Report</h2>
      <Content>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Label>
            <Text>Past Traversal:</Text>
            <TextField
              value={pastTraversal}
              onChange={(e: any) => setPastTraversal(e.target.value)}
              style={{ minWidth: '380px' }}
            />
          </Label>
          <Label>
            <Text>Risks at Age:</Text>
            <Select
              value={selectedAge}
              options={visibleAgeOptions}
              onChange={onDropdownChange}
            />
          </Label>

          <Button type="submit" style={{ marginBottom: '50px' }}>
            Compare
          </Button>
        </form>
      </Content>

      {comparisonReport?.loaded &&
        (!!current && !!previous && !!summary ? (
          <>
            <Summary summary={summary}></Summary>
            <CompareRiskCharts
              currentSnapshot={comparisonReport.currentSnapshot}
              previousSnapshot={comparisonReport.previousSnapshot}
            ></CompareRiskCharts>
            <CompareWellbeingCharts
              currentScores={current.wellness}
              previousScores={previous.wellness}
            ></CompareWellbeingCharts>
            <CompareNumbers
              currentNumbers={current.myNumbers}
              previousNumbers={previous.myNumbers}
            ></CompareNumbers>
          </>
        ) : (
          <span>
            Unable to generate a report. Please make sure you have entered an
            HRA traversal and it is completed.
          </span>
        ))}
    </>
  );
};

export default ComparisonReport;
