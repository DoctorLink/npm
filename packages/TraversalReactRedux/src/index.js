// TODO Discuss with Ben whether we need/ought be exporting all of this.

import * as actions from './Actions'
import * as helpers from './Helpers'

export { createTraversalWebApi, createChatWebApi }  from './WebApi'

export { actions }
export { helpers }

export {
    createTraversalStore,
    createChatStore,
    createTraversalResponse,
    createChatResponse,
    flattenTraversalNodeCollection,
    flattenTraversalChat,
} from "./Helpers";

export { default as AlgoName }  from './Components/AlgoName'
export { default as Answer }  from './Components/Answer'
export { default as BodyContent } from './Components/BodyContent'
export { default as Button } from './Components/Button'
export { default as Checkbox } from './Components/Checkbox'
export { default as DateField } from './Components/DateField'
export { default as Fieldset } from './Components/Fieldset'
export { default as GlobalStyle } from './Components/GlobalStyle'
export { default as InfoIcon } from './Components/InfoIcon'
export { default as InfoButton } from './Components/InfoButton'
export { default as Label } from './Components/Label'
export { default as Modal } from './Components/Modal'
export { default as NumberField } from './Components/NumberField'
export { default as Question } from './Components/Question'
export { default as QuestionTitle } from './Components/QuestionTitle'
export { default as Radio } from './Components/Radio'
export { default as Response } from './Components/Response'
export { default as Section } from './Components/Section'
export { default as Summary } from './Components/Summary'
export { default as TableAnswerCell } from './Components/TableAnswerCell'
export { default as TableHeaderCell } from './Components/TableHeaderCell'
export { default as TableHeaderRow } from './Components/TableHeaderRow'
export { default as TableQuestion } from './Components/TableQuestion'
export { default as TableQuestionRow } from './Components/TableQuestionRow'
export { default as TextField } from './Components/TextField'
export { default as Title } from './Components/Title'

export {
    PanelBlocks,
    PanelContainer,
    Panel,
    PanelHeader,
    PanelTitle,
    PanelContent,
    PanelConclusion,
    PanelBodyText,
    PanelConclusionTitle,
    PanelSVG
} from './Components';

export { default as Loader } from './Components/Loader'
export { default as Step } from './Components/Step'
export { default as ChatForm } from './Components/ChatForm'
export { default as ChatInfoIcon } from './Components/ChatInfoIcon'
export { default as ChatQuestion } from './Components/ChatQuestion'
export { default as ChatPreviousAnswers } from './Components/ChatPreviousAnswers'
export { default as ChatPreviousAnswer } from './Components/ChatPreviousAnswer'
export { default as ChatTextWrapper } from './Components/ChatTextWrapper'
export { default as ChatTextField } from './Components/ChatTextField'
export { default as ChoiceContainer } from './Components/ChoiceContainer'
export { default as PrimaryChoice } from './Components/PrimaryChoice'
export { default as SecondaryChoice } from './Components/SecondaryChoice'



export { default as SymptomReport } from './ComponentModules/SymptomReport'
export { default as Traversal }  from './ComponentModules/Traversal'
export { default as TraversalForm }  from './ComponentModules/TraversalForm'
export { default as TraversalResponse }  from './ComponentModules/TraversalResponse'
export { default as TraversalTable }  from './ComponentModules/TraversalTable'
export { default as Chat }  from './ComponentModules/Chat'

export { default as ConnectedCheckbox } from './Containers/Checkbox'
export { default as ConnectedDateField } from './Containers/DateField'
export { default as ConnectedModal } from './Containers/Modal'
export { default as ConnectedNumberField } from './Containers/NumberField'
export { default as ConnectedRadio } from './Containers/Radio'
export { default as ConnectedSummary } from './Containers/Summary'
export { default as ConnectedTextField } from './Containers/TextField'

export { default as HomePage } from './Pages/Home'
export { default as TraversalPage } from './Pages/Traversal'
export { default as ChatPage } from './Pages/Chat'

export { default as TraversalApp } from './AppComponents/Traversal'
export { default as ChatApp } from './AppComponents/Chat'

export { rootChatReducer, rootTraversalReducer } from './Reducers'

export { default as traversalReducer } from './Reducers/Traversal'
export { default as chatReducer } from './Reducers/Chat'
export { default as conclusionReducer } from './Reducers/Conclusion'
export { default as summaryReducer } from './Reducers/Summary'
export { default as modalReducer } from './Reducers/Modal'

export { createTraversalSaga, createChatSaga } from './Sagas'

export { default as createAutoForwardGenerator } from './Sagas/Generators/AutoForward'
export { default as createAutoForwardChatGenerator } from './Sagas/Generators/AutoForwardChat'
export { default as createConclusionsGenerator } from './Sagas/Generators/Conclusions'
export { default as createContinueGenerator } from './Sagas/Generators/Continue'
export { default as createContinueChatGenerator } from './Sagas/Generators/ContinueChat'
export { default as createNextGenerator } from './Sagas/Generators/Next'
export { default as createNextChatGenerator } from './Sagas/Generators/NextChat'
export { default as createPreviousGenerator } from './Sagas/Generators/Previous'
export { default as createPreviousChatGenerator } from './Sagas/Generators/PreviousChat'
export { default as createStartGenerator } from './Sagas/Generators/Start'
export { default as createStartChatGenerator } from './Sagas/Generators/StartChat'
export { default as createSummaryGenerator } from './Sagas/Generators/Summary'
export { default as createSymptomReportGenerator } from './Sagas/Generators/SymptomReport'

export { default as baseTheme } from './Theme/base'