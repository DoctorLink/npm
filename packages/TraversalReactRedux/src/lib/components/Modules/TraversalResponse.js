import React from 'react'

import Response from '../Response'
import Question from '../Question'
import Section from '../Section'
import Answer from '../Answer'
import Label from '../Label'
import InfoIcon from '../InfoIcon'

import Checkbox from '../../containers/ConnectedCheckbox'
import Radio from '../../containers/ConnectedRadio'
import TextField from '../../containers/ConnectedTextField'
import NumberField from '../../containers/ConnectedNumberField'
import DateField from '../../containers/ConnectedDateField'

export default ({ question, answers, error, showExplanation }) => {
    const display = question.data.display ? question.data.display : [{ header: null, answers: question.answers.map(x => Number(x.split("_")[2])) }];
    return (<Response>
        <Question displayText={question.displayText} error={error}>
            <InfoIcon onClick={showExplanation} explanation={question.explanation} />
        </Question>
        {display.map((section, i) => {
            const sectionAnswerKeys = question.answers.filter(x => section.answers.includes(Number(x.split("_")[2])));
            return (<React.Fragment key={i}>
                <Section text={section.header}/>
                {sectionAnswerKeys.map((answerId) => { 
                    const answer = answers[answerId]
                    return (<Answer key={answerId}>
                        <Label answer={answer}>
                            {answer.controlType === "Radio" && <Radio answer={answer} answerId={answerId} questionAnswerIds={question.answers} />}
                            {answer.controlType === "Checkbox" && <Checkbox answer={answer} answerId={answerId} questionAnswerIds={question.answers} />}
                            {answer.controlType === "Text" && <TextField answer={answer} answerId={answerId} questionAnswerIds={question.answers} />}
                            {answer.controlType === "Number" && <NumberField answer={answer} answerId={answerId} questionAnswerIds={question.answers} />}
                            {answer.controlType === "Date" && <DateField answer={answer} answerId={answerId} questionAnswerIds={question.answers} />}
                        </Label>
                        <InfoIcon onClick={showExplanation} explanation={answer.explanation} />
                    </Answer>)
                })}
            </React.Fragment>)
        })}
    </Response>)
};
