export interface TraversalCallbacks {
  next: () => void;
  previous: () => void;
  showSummary: () => void;
  showExplanation: (explanation: any) => void;
  updateValue: (answerId: any, questionAnswerIds: any, value: any) => void;
  toggleCheckbox: (event: any, answerId: any, questionAnswerIds: any) => void;
  toggleRadio: (event: any, answerId: any, questionAnswerIds: any) => void;
}
