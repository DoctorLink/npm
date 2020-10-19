import Loader from '../../Components/Loader';
import Step from '../../Components/Step';
import InfoIcon from '../../Components/ChatInfoIcon';
import PreviousAnswer from '../../Components/ChatPreviousAnswer';
import TextWrapper from '../../Components/ChatTextWrapper';
import TextField from '../../Components/ChatTextField';
import ChoiceContainer from '../../Components/ChoiceContainer';
import PrimaryChoice from '../../Components/PrimaryChoice';
import SecondaryChoice from '../../Components/SecondaryChoice';
import Section from '../../Components/ChatSection';
import HiddenInput from '../../Components/HiddenInput';
import { ChatTraversalCallbacks } from './ChatCallbacks';
import { ChatComponents } from './ChatComponents';
import { ChatContainer as Container } from './ChatContainer';
import { Question, PreviousAnswers, Form } from './animations';

export const defaultChatComponents: ChatComponents = {
  Container,
  Loader,
  Step,
  Form,
  InfoIcon,
  Question,
  PreviousAnswers,
  PreviousAnswer,
  TextWrapper,
  TextField,
  ChoiceContainer,
  PrimaryChoice,
  SecondaryChoice,
  Section,
  HiddenInput,
};

export const defaultChatActions: ChatTraversalCallbacks = {
  next: () => undefined,
  jump: () => undefined,
  showExplanation: () => undefined,
  updateValue: () => undefined,
  toggleCheckbox: () => undefined,
  toggleRadio: () => undefined,
};
