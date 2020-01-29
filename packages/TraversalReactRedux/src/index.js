// Components
export { default as ThemeProvider } from './Components/ThemeProvider'

export { default as BodyOverflowHidden } from './Components/BodyOverflowHidden'
export { default as DelayExit } from './Components/DelayExit'
export { default as TransparentCurtain } from './Components/TransparentCurtain'
export { UpdateWhenVisible } from './Components/UpdateWhenVisible'

export { default as PanelBlocks } from './Components/PanelBlocks'
export { default as PanelContainer } from './Components/PanelContainer'
export { default as Panel } from './Components/Panel'
export { default as PanelHeader } from './Components/PanelHeader'
export { default as PanelTitle } from './Components/PanelTitle'
export { default as PanelContent } from './Components/PanelContent'
export { default as PanelConclusion } from './Components/PanelConclusion'
export { default as PanelBodyText } from './Components/PanelBodyText'
export { default as PanelConclusionTitle } from './Components/PanelConclusionTitle'
export { default as PanelSVG } from './Components/PanelSVG'
export { default as HealthReportPanelHeader } from './Components/HealthReportPanelHeader'

export { AccordionHeader, AccordionBody } from './Components/Accordion'
export { RiskChart } from './Components/RiskChart'
export { WellbeingChart } from './Components/WellbeingChart'

export { default as DisplayText }  from './Components/DisplayText'
export { default as AlgoName }  from './Components/AlgoName'
export { default as BodyContent } from './Components/BodyContent'
export { default as Button } from './Components/Button'
export { default as Checkbox } from './Components/Checkbox'
export { default as DateField } from './Components/DateField'
export { default as Fieldset } from './Components/Fieldset'
export { default as GlobalStyle } from './Components/GlobalStyle'
export { default as InfoIcon } from './Components/InfoIcon'
export { default as Label } from './Components/Label'
export { default as NumberField } from './Components/NumberField'
export { default as Question } from './Components/Question'
export { default as QuestionTitle } from './Components/QuestionTitle'
export { default as Radio } from './Components/Radio'
export { default as Response } from './Components/Response'
export { default as Section } from './Components/Section'
export { default as TableAnswerCell } from './Components/TableAnswerCell'
export { default as TableHeaderCell } from './Components/TableHeaderCell'
export { default as TableHeaderRow } from './Components/TableHeaderRow'
export { default as TableQuestion } from './Components/TableQuestion'
export { default as TableQuestionRow } from './Components/TableQuestionRow'
export { default as TextField } from './Components/TextField'
export { default as Title } from './Components/Title'
export { Dropdown, InlineDropdown } from './Components/Dropdown'
export { default as NavigationButtons } from './Components/NavigationButtons'
export { default as CarouselNavigation } from './Components/CarouselNavigation'

export { default as Loader } from './Components/Loader'
export { default as Step } from './Components/Step'
export { default as ChatForm } from './Components/ChatForm'
export { default as ChatInfoIcon } from './Components/ChatInfoIcon'
export { default as ChatQuestion } from './Components/ChatQuestion'
export { default as ChatPreviousAnswers } from './Components/ChatPreviousAnswers'
export { default as ChatPreviousAnswer } from './Components/ChatPreviousAnswer'
export { default as ChatTextWrapper } from './Components/ChatTextWrapper'
export { default as ChatTextField } from './Components/ChatTextField'
export { default as ChatSection} from './Components/ChatSection'
export { default as ChoiceContainer } from './Components/ChoiceContainer'
export { default as PrimaryChoice } from './Components/PrimaryChoice'
export { default as SecondaryChoice } from './Components/SecondaryChoice'

// AppComponents
export {
    ChatApp,
    TraversalApp
} from './AppComponents';

// Pages
export {
    HomePage,
    ChatPage,
    TraversalPage
} from './Pages';

//Containers
export {
    InfoIconConnected,
    ModalConnected,
    SummaryConnected,
    ConclusionReportConnected,
    SymptomReportConnected,
    HealthAssessmentConnected
} from './Containers';

// Traversal Component
export {
    Traversal,
    TraversalForm,
    TraversalResponse,
    TraversalTable,
    defaultTraversalComponents,
    defaultTraversalActions,
    buildTraversalActions
} from './ComponentModules/Traversal';

// Chat Component
export {
    Chat,
    defaultChatComponents,
    defaultChatActions,
    buildChatActions
} from './ComponentModules/Chat';

// Symptom Report Component
export {
    SymptomReport,
    defaultSymptomReportComponents,
    defaultSymptomReportActions,
    buildSymptomReportActions
} from './ComponentModules/SymptomReport';

// Modal Component
export {
    Modal,
    defaultModalComponents,
    defaultModalActions,
    buildModalActions
} from './ComponentModules/Modal';

// Summary Component
export {
    Summary,
    defaultSummaryComponents,
    defaultSummaryActions,
    buildSummaryActions
} from './ComponentModules/Summary';

// Actions
export { actionCreators, actions } from './Actions';

// Constants
export { defaultLabels } from './Constants/labels';

// Helpers
export { default as createTraversalResponse } from './Helpers/createTraversalResponse'
export { default as createChatResponse } from './Helpers/createChatResponse'
export { default as flattenTraversalNodeCollection } from './Helpers/flattenTraversalNodeCollection'
export { default as flattenTraversalChat } from './Helpers/flattenTraversalChat'
export { createTraversalStore, createChatStore } from './Helpers/createStore'
export { replaceLineBreaks } from './Helpers/replaceLineBreaks'
export { default as scrollLastChildIntoView } from './Helpers/scrollLastChildIntoView'

// Reducers
export {
    rootChatReducer,
    rootTraversalReducer,
    traversalReducer,
    chatReducer,
    conclusionReducer,
    summaryReducer,
    modalReducer,
    answersReducer,
    healthAssessmentReducer,
    clientProductsReducer,
    labelsReducer
} from './Reducers';

// Root Sagas
export {
    createChatSaga,
    createTraversalSaga,
} from './Sagas/Root';

// Effects
export {
    createHealthRiskAssessmentEffects,
    createHistoryPushEffects,
    createProductsEffects,
    createStartScrollToTopEffects,
    createSummaryEffects,
    createSymptomAssessmentEffects,
    createTraversalChatEffects,
    createTraversalClassicEffects,
    createWebApiEffects,
} from './Sagas/Effects';

// Generators
export {
    createScrollToTopGenerator,
    createScrollIntoViewGenerator,
    createHistoryPushGenerator,
    createConclusionsGenerator,
    createContinueGenerator,
    createContinueChatGenerator,
    createHealthRisksGenerator,
    createHealthAgeGenerator,
    createWellnessGenerator,
    createNextGenerator,
    createNextChatGenerator,
    createPreviousGenerator,
    createPreviousChatGenerator,
    createStartGenerator,
    createStartChatGenerator,
    createSummaryGenerator,
    createSymptomReportGenerator,
    createWebApiNotOkGenerator,
    createWebApiErrorGenerator,
    createProductsGenerator,
    createApiGenerator,
    addScrollEffect
} from './Sagas/Generators';

// WebApi
export {
    createChatWebApi,
    createTraversalWebApi,
    createHealthAssessmentWebApi
} from './WebApi'

export { createBrowserHistory } from 'history';
export { default as createTheme } from './Theme';