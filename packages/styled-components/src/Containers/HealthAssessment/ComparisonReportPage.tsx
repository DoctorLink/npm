import React from 'react';
import {
  CompareRiskCharts,
  CompareWellbeingCharts,
  CompareNumbers,
} from '../../Components';
import { useSelector } from 'react-redux';
import {
  comparisonReportSelector,
  parseNumberConclusion,
} from '@doctorlink/traversal-redux';
import { HealthComparisonModel } from '@doctorlink/traversal-core';

interface ComparisonReportPageProps {
  route: string;
  currentTitle: string;
  previousTitle: string;
  mobileView?: boolean;
}

export const ComparisonReportPage: React.FC<ComparisonReportPageProps> = ({
  route,
  currentTitle,
  previousTitle,
  mobileView,
}) => {
  const comparisonReport = useSelector(
    comparisonReportSelector
  ) as HealthComparisonModel;
  const current = comparisonReport.currentSnapshot;
  const prev = comparisonReport.previousSnapshot;

  const currentNumbers =
    current.myNumbers && current.myNumbers.map(parseNumberConclusion);
  const prevNumbers =
    prev.myNumbers && prev.myNumbers.map(parseNumberConclusion);
  switch (route) {
    case 'risks':
      return (
        <CompareRiskCharts
          currentSnapshot={current}
          previousSnapshot={prev}
          currentTitle={currentTitle}
          previousTitle={previousTitle}
          mobileView={mobileView}
        />
      );
    case 'wellbeing':
      return (
        <CompareWellbeingCharts
          currentScores={current.wellnessOutput.scores}
          previousScores={prev.wellnessOutput.scores}
          currentTitle={currentTitle}
          previousTitle={previousTitle}
          mobileView={mobileView}
        />
      );
    case 'my-numbers':
      return (
        <CompareNumbers
          currentNumbers={currentNumbers}
          previousNumbers={prevNumbers}
          currentTitle={currentTitle}
          previousTitle={previousTitle}
          mobileView={mobileView}
        />
      );
    default:
      return null;
  }
};
