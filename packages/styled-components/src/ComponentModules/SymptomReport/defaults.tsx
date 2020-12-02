import {
  InfoIcon as Info,
  PanelBlocks as Blocks,
  PanelContainer as Container,
  Panel,
  PanelHeader as Header,
  PanelTitle as Title,
  PanelContent as Content,
  PanelConclusion as Conclusion,
  PanelBodyText as BodyText,
  PanelConclusionTitle as ConclusionTitle,
  SymptomReportMessage as Message,
  SymptomReportMessageTitle as MessageTitle,
} from '../../Components';
import { SymptomReportCallbacks } from './SymptomReportCallbacks';
import { Icon } from './Icon';
import { SymptomReportComponents } from './SymptomReportComponents';

export const defaultSymptomReportComponents: SymptomReportComponents = {
  Blocks,
  Container,
  Panel,
  Header,
  Icon,
  Title,
  Content,
  BodyText,
  Conclusion,
  ConclusionTitle,
  Info,
  Message,
  MessageTitle,
};

export const defaultSymptomReportActions: SymptomReportCallbacks = {
  showExplanation: () => undefined,
};
