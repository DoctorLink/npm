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

  const infoIcon = (
    <InfoIcon
      showExplanation={actions.showExplanation}
      explanation={answer.explanation}
    />
  );

  switch (answer.controlType) {
    case 'Text':
    case 'Number':
    case 'Date':
      return (
        <TextWrapper text={answer.displayText}>
          <TextField
            type={answer.controlType.toLowerCase()}
            value={answer.controlValue || ''}
            onChange={(e) =>
              actions.updateValue(answerId, questionAnswerIds, e.target.value)
            }
          />
          {infoIcon}
        </TextWrapper>
      );
    case 'Checkbox':
      return (
        <ChoiceContainer>
          <HiddenInput
            type="checkbox"
            id={answerId}
            checked={answer.controlChecked}
            onChange={(e) =>
              actions.toggleCheckbox(e, answerId, questionAnswerIds)
            }
          />
          <PrimaryChoice displayText={answer.displayText} htmlFor={answerId}>
            {infoIcon}
          </PrimaryChoice>
        </ChoiceContainer>
      );
    case 'Radio': {
      const Choice =
        answer.controlType === 'Radio' && showContinueButton
          ? SecondaryChoice
          : PrimaryChoice;
      return (
        <ChoiceContainer>
          <HiddenInput
            type="radio"
            id={answerId}
            name={answerId.substring(0, answerId.lastIndexOf('_'))}
            checked={answer.controlChecked}
            onChange={() => undefined}
            onClick={(e) => actions.toggleRadio(e, answerId, questionAnswerIds)}
          />
          <Choice displayText={answer.displayText} htmlFor={answerId}>
            {infoIcon}
          </Choice>
        </ChoiceContainer>
      );
    }
    default:
      return null;
  }
};
