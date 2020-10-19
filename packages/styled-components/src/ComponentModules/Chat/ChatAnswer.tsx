import React from 'react';
import { TraversalAnswer } from '@doctorlink/traversal-core';
import { ChatTraversalCallbacks } from './ChatCallbacks';
import { ChatComponents } from './ChatComponents';

export const ChatAnswer: React.FC<{
  answer: TraversalAnswer;
  answerId: string;
  questionAnswerIds: string[];
  showContinueButton: boolean;
  actions: ChatTraversalCallbacks;
  components: ChatComponents;
}> = ({
  answer,
  answerId,
  questionAnswerIds,
  showContinueButton,
  actions,
  components,
}) => {
  const {
    ChoiceContainer,
    PrimaryChoice,
    SecondaryChoice,
    HiddenInput,
    TextWrapper,
    TextField,
    InfoIcon,
  } = components;

  return (
    <ChoiceContainer>
      {answer.controlType === 'Checkbox' && (
        <PrimaryChoice displayText={answer.displayText}>
          <HiddenInput
            type="checkbox"
            id={answerId}
            checked={answer.controlChecked}
            onChange={(e) =>
              actions.toggleCheckbox(e, answerId, questionAnswerIds)
            }
          />
        </PrimaryChoice>
      )}
      {answer.controlType === 'Radio' && !showContinueButton && (
        <PrimaryChoice displayText={answer.displayText}>
          <HiddenInput
            type="radio"
            id={answerId}
            name={answerId.substring(0, answerId.lastIndexOf('_'))}
            checked={answer.controlChecked}
            onChange={() => undefined}
            onClick={(e) => actions.toggleRadio(e, answerId, questionAnswerIds)}
          />
        </PrimaryChoice>
      )}
      {answer.controlType === 'Radio' && showContinueButton && (
        <SecondaryChoice displayText={answer.displayText}>
          <HiddenInput
            type="radio"
            id={answerId}
            name={answerId.substring(0, answerId.lastIndexOf('_'))}
            checked={answer.controlChecked}
            onChange={() => undefined}
            onClick={(e) => actions.toggleRadio(e, answerId, questionAnswerIds)}
          />
        </SecondaryChoice>
      )}
      {(answer.controlType === 'Text' ||
        answer.controlType === 'Number' ||
        answer.controlType === 'Date') && (
        <TextWrapper text={answer.displayText}>
          <TextField
            value={answer.controlValue || ''}
            onChange={(e) =>
              actions.updateValue(answerId, questionAnswerIds, e.target.value)
            }
          />
        </TextWrapper>
      )}
      <InfoIcon
        showExplanation={actions.showExplanation}
        explanation={answer.explanation}
      />
    </ChoiceContainer>
  );
};
