export type UpdateValueCallback = (
  answerId: string,
  questionAnswerIds: string[],
  value: string
) => void;

export type ToggleRadioCallback = (
  event: string,
  answerId: string,
  questionAnswerIds: string[],
  checked: boolean
) => void;

export type ToggleCheckboxCallback = (
  event: string,
  answerId: string,
  questionAnswerIds: string[]
) => void;

export interface TraversalCallbacks {
  next: () => void;
  previous: () => void;
  showSummary: () => void;
  showExplanation: (explanation: string) => void;
  updateValue: UpdateValueCallback;
  toggleCheckbox: ToggleCheckboxCallback;
  toggleRadio: ToggleRadioCallback;
}
