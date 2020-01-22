import React from 'react';
import MediaQuery from 'react-responsive';
import TraversalResponse from '../TraversalResponse';
import TableQuestion from '../TraversalTable';
import { defaultTraversalActions, defaultTraversalComponents } from '../defaults';

const TraversalForm = ({ traversal, minWidthTable, children, actions = defaultTraversalActions, components = defaultTraversalComponents }) => {
    const comps = { ...defaultTraversalComponents, ...components };
    const { nodeIds, nodes, questions, answers, errors, previous, loading, collectionErrors } = traversal;
    return (<comps.Form onSubmit={(e) => { e.preventDefault(); actions.next(); }} id="Traversal">
        {comps.AlgoName && <comps.AlgoName>{traversal.algoName}</comps.AlgoName>}
        {collectionErrors && collectionErrors.length > 0 && collectionErrors.map((error, i) => <comps.ErrorText key={i}>{error}</comps.ErrorText>)}
        <comps.Collection>
            {nodeIds.map((nodeId) => {
                const node = nodes[nodeId];
                return (<comps.Fieldset key={nodeId} mirror={previous} disabled={loading}>
                    {(node.questions.length !== 1 || node.isTable) && (<>
                        {comps.QuestionTitle && node.title && <comps.QuestionTitle>{node.title}</comps.QuestionTitle>}
                        <comps.Question displayText={node.displayText}>
                            <comps.InfoIcon onClick={actions.showExplanation} explanation={node.explanation} />
                        </comps.Question>
                    </>)}
                    <MediaQuery minWidth={minWidthTable}>
                        {(matches) => {
                            if (matches && node.isTable) {
                                return (<TableQuestion 
                                            node={node} 
                                            questions={questions} 
                                            answers={answers} 
                                            errors={errors} 
                                            actions={actions} 
                                            components={comps} />)
                            } else {
                                return node.questions.map(questionId => 
                                    (<TraversalResponse 
                                        key={questionId} 
                                        question={questions[questionId]} 
                                        answers={answers} 
                                        error={errors[questionId]} 
                                        actions={actions} 
                                        components={comps} />))
                            }
                        }}
                    </MediaQuery>
                </comps.Fieldset >)
            })}
        </comps.Collection>
        {children}
    </comps.Form>)
}

TraversalForm.defaultProps = {
    minWidthTable: 700
}

export default TraversalForm