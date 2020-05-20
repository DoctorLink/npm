export interface Labels {
  traversal: TraversalLabels;
  summary: SummaryLabels;
}

export interface TraversalLabels {
  next: string;
  previous: string;
  summary: string;
}

export interface SummaryLabels {
  title: string;
  noQuestions: string;
  noAnswers: string;
}
