import algoname from './algoname';
import displayText from './displayText';
import button from './button';
import chatpreviousanswer from './chatpreviousanswer';
import checkbox from './checkbox';
import datefield from './datefield';
import errortext from './errortext';
import infoicon from './infoicon';
import label from './label';
import modal from './modal';
import numberfield from './numberfield';
import panelbodytext from './panelbodytext';
import panelconclusiontitle from './panelconclusiontitle';
import panelcontent from './panelcontent';
import panelheader from './panelheader';
import paneltitle from './paneltitle';
import question from './question';
import questiontitle from './questiontitle';
import radio from './radio';
import summary from './summary';
import tableanswercell from './tableanswercell';
import tableheadercell from './tableheadercell';
import tablerow from './tablerow';
import textfield from './textfield';
import title from './title';

export default (baseTheme: any) => ({
  algoname: algoname(baseTheme),
  button: button(baseTheme),
  chatpreviousanswer: chatpreviousanswer(baseTheme),
  checkbox: checkbox(baseTheme),
  datefield: datefield(baseTheme),
  displayText: displayText(baseTheme),
  errortext: errortext(baseTheme),
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
  tableanswercell: tableanswercell(baseTheme),
  tableheadercell: tableheadercell(baseTheme),
  tablerow: tablerow(baseTheme),
  textfield: textfield(baseTheme),
  title: title(baseTheme),
});
