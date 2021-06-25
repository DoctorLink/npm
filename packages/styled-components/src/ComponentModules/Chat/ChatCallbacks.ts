import { TraversalQuestion } from '@doctorlink/traversal-core';
import { SyntheticEvent } from 'react';

export interface ChatTraversalCallbacks {
  next: () => void;
  jump: (question: TraversalQuestion) => void;
  showExplanation: (explanation: string) => void;
  updateValue: (
    answerId: string,
    questionAnswerIds: string[],
    value: string
  ) => void;
  toggleCheckbox: (
    event: SyntheticEvent<HTMLInputElement>,
    answerId: string,
    questionAnswerIds: string[]
  ) => void;
  toggleRadio: (
    event: SyntheticEvent<HTMLInputElement>,
    answerId: string,
    questionAnswerIds: string[]
  ) => void;
  loadAlgoSearchData: (answerId: string) => void;
}
