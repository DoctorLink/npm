import React from 'react';
import { TraversalAnswer } from '@doctorlink/traversal-core';
import { ChatTraversalCallbacks } from './ChatCallbacks';
import { ChatComponents } from './ChatComponents';
import { DropdownAnswer } from './DropdownAnswer';

export const ChatAnswer: React.FC<{
  answer: TraversalAnswer;
  answerId: string;
  questionAnswerIds: string[];
  actions: ChatTraversalCallbacks;
  components: ChatComponents;
}> = ({ answer, answerId, questionAnswerIds, actions, components }) => {
  const {
    ChoiceContainer,
    PrimaryChoice,
    TextWrapper,
    TextField,
    InfoIcon,
    Radio,
    Checkbox,
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
          <PrimaryChoice
            displayText={answer.displayText}
            input={
              <Checkbox
                id={answerId}
                checked={answer.controlChecked}
                onChange={(e) =>
                  actions.toggleCheckbox(e, answerId, questionAnswerIds)
                }
              />
            }
            infoIcon={infoIcon}
          />
        </ChoiceContainer>
      );
    case 'Radio': {
      return (
        <ChoiceContainer>
          <PrimaryChoice
            displayText={answer.displayText}
            input={
              <Radio
                id={answerId}
                name={answerId.substring(0, answerId.lastIndexOf('_'))}
                checked={answer.controlChecked}
                onChange={() => undefined}
                onClick={(e) =>
                  actions.toggleRadio(e, answerId, questionAnswerIds)
                }
              />
            }
            infoIcon={infoIcon}
          />
        </ChoiceContainer>
      );
    }
    case 'Dropdown': {
      // TODO find a more robust way to identify the text answer
      const textAnswerId = questionAnswerIds.find((id) => id !== answerId);
      return (
        <DropdownAnswer
          algos={answer.data?.algos ?? []}
          loadAlgos={() => actions.loadAlgoSearchData(answerId)}
          value={answer.controlValue}
          onValueChange={(value) =>
            actions.updateValue(answerId, questionAnswerIds, value)
          }
          onTextChange={(text) => {
            if (textAnswerId) {
              actions.updateValue(textAnswerId, questionAnswerIds, text);
            }
          }}
        />
      );
    }
    default:
      return null;
  }
};
