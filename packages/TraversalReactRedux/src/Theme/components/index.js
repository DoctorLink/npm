import button from './button';
import title from './title';
import algoname from './algoname';
import errortext from './errortext';
import question from './question';
import questiontitle from './questiontitle';
import tableheadercell from './tableheadercell'
import label from './label';
import checkbox from './checkbox';
import radio from './radio';
import datefield from './datefield';
import numberfield from './numberfield';
import textfield from './textfield';
import infoicon from './infoicon';
import modal from './modal';
import summary from './summary';
import panelcontent from './panelcontent'
import panelheader from './panelheader'
import paneltitle from './paneltitle'
import panelconclusiontitle from './panelconclusiontitle'
import panelbodytext from './panelbodytext'



import chatpreviousanswer from './chatpreviousanswer'

export default baseTheme => ({
  title: title(baseTheme),
  algoname: algoname(baseTheme),
  button: button(baseTheme),
  checkbox: checkbox(baseTheme),
  datefield: datefield(baseTheme),
  infoicon: infoicon(baseTheme),
  errortext: errortext(baseTheme),
  question: question(baseTheme),
  questiontitle: questiontitle(baseTheme),
  tableheadercell: tableheadercell(baseTheme),
  label: label(baseTheme),
  numberfield: numberfield(baseTheme),
  radio: radio(baseTheme),
  textfield: textfield(baseTheme),
  chatpreviousanswer: chatpreviousanswer(baseTheme),
  modal: modal(baseTheme),
  summary: summary(baseTheme),
  panelcontent: panelcontent(baseTheme),
  panelheader: panelheader(baseTheme),
  paneltitle: paneltitle(baseTheme),
  panelconclusiontitle: panelconclusiontitle(baseTheme),
  panelbodytext: panelbodytext(baseTheme),
})