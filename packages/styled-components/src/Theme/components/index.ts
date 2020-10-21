import { BaseTheme } from '../base';
import algoname, { AlgoNameTheme } from './algoname';
import displayText, { DisplayTextTheme } from './displayText';
import button, { ButtonTheme } from './button';
import chatAnswer, { ChatAnswerTheme } from './chatAnswer';
import chatpreviousanswer, {
  ChatPreviousAnswerTheme,
} from './chatpreviousanswer';
import chatQuestion, { ChatQuestionTheme } from './chatQuestion';
import checkbox, { CheckboxTheme } from './checkbox';
import datefield, { DateFieldTheme } from './datefield';
import errortext, { ErrorTextTheme } from './errortext';
import healthreportconclusion, {
  HealthReportConclusionTheme,
} from './healthReportConclusion';
import healthreportexplanation, {
  HealthReportExplanationTheme,
} from './healthReportExplanation';
import healthreporttitle, { HealthReportTitleTheme } from './healthreporttitle';
import infoicon, { InfoIconTheme } from './infoicon';
import label, { LabelTheme } from './label';
import modal, { ModalTheme } from './modal';
import numberfield, { NumberFieldTheme } from './numberfield';
import panelbodytext, { PanelBodyTextTheme } from './panelbodytext';
import panelconclusiontitle, {
  PanelConclusionTitleTheme,
} from './panelconclusiontitle';
import panelcontent, { PanelContentTheme } from './panelcontent';
import panelheader, { PanelHeaderTheme } from './panelheader';
import paneltitle, { PanelTitleTheme } from './paneltitle';
import question, { QuestionTheme } from './question';
import questiontitle, { QuestionTitleTheme } from './questiontitle';
import radio, { RadioTheme } from './radio';
import summary, { SummaryTheme } from './summary';
import tableanswercell, { TableAnswerCellTheme } from './tableanswercell';
import tableheadercell, { TableHeaderCellTheme } from './tableheadercell';
import tablerow, { TableRowTheme } from './tablerow';
import textfield, { TextFieldTheme } from './textfield';
import title, { TitleTheme } from './title';
import comparisonreporttitle, {
  ComparisonReportTitleTheme,
} from './comparisonreporttitle';
import summarydivider, { SummaryDividerTheme } from './summarydivider';
import toggleassessment, { ToggleAssessmentTheme } from './toggleassessment';

export interface ComponentTheme {
  algoname: AlgoNameTheme;
  button: ButtonTheme;
  chatAnswer: ChatAnswerTheme;
  chatpreviousanswer: ChatPreviousAnswerTheme;
  chatQuestion: ChatQuestionTheme;
  checkbox: CheckboxTheme;
  datefield: DateFieldTheme;
  displayText: DisplayTextTheme;
  errortext: ErrorTextTheme;
  healthReportConclusion: HealthReportConclusionTheme;
  healthReportExplanation: HealthReportExplanationTheme;
  healthreporttitle: HealthReportTitleTheme;
  comparisonreporttitle: ComparisonReportTitleTheme;
  infoicon: InfoIconTheme;
  label: LabelTheme;
  modal: ModalTheme;
  numberfield: NumberFieldTheme;
  panelbodytext: PanelBodyTextTheme;
  panelconclusiontitle: PanelConclusionTitleTheme;
  panelcontent: PanelContentTheme;
  panelheader: PanelHeaderTheme;
  paneltitle: PanelTitleTheme;
  question: QuestionTheme;
  questiontitle: QuestionTitleTheme;
  radio: RadioTheme;
  summary: SummaryTheme;
  summaryDivider: SummaryDividerTheme;
  tableanswercell: TableAnswerCellTheme;
  tableheadercell: TableHeaderCellTheme;
  tablerow: TableRowTheme;
  textfield: TextFieldTheme;
  title: TitleTheme;
  toggleAssessment: ToggleAssessmentTheme;
}

const componentTheme = (baseTheme: BaseTheme): ComponentTheme => ({
  algoname: algoname(baseTheme),
  button: button(baseTheme),
  chatAnswer: chatAnswer(baseTheme),
  chatpreviousanswer: chatpreviousanswer(baseTheme),
  chatQuestion: chatQuestion(baseTheme),
  checkbox: checkbox(baseTheme),
  datefield: datefield(baseTheme),
  displayText: displayText(baseTheme),
  errortext: errortext(baseTheme),
  healthReportConclusion: healthreportconclusion(baseTheme),
  healthReportExplanation: healthreportexplanation(baseTheme),
  healthreporttitle: healthreporttitle(baseTheme),
  comparisonreporttitle: comparisonreporttitle(baseTheme),
  infoicon: infoicon(baseTheme),
  label: label(baseTheme),
  modal: modal(baseTheme),
  numberfield: numberfield(baseTheme),
  panelbodytext: panelbodytext(baseTheme),
  panelconclusiontitle: panelconclusiontitle(baseTheme),
  panelcontent: panelcontent(baseTheme),
  panelheader: panelheader(baseTheme),
  paneltitle: paneltitle(baseTheme),
  question: question(baseTheme),
  questiontitle: questiontitle(baseTheme),
  radio: radio(baseTheme),
  summary: summary(baseTheme),
  summaryDivider: summarydivider(baseTheme),
  tableanswercell: tableanswercell(baseTheme),
  tableheadercell: tableheadercell(baseTheme),
  tablerow: tablerow(baseTheme),
  textfield: textfield(baseTheme),
  title: title(baseTheme),
  toggleAssessment: toggleassessment(baseTheme),
});

export default componentTheme;
