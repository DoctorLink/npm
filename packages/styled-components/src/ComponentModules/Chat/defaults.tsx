import Loader from '../../Components/Loader';
import Step from '../../Components/Step';
import InfoIcon from '../../Components/ChatInfoIcon';
import PreviousAnswer from '../../Components/ChatPreviousAnswer';
import TextWrapper from '../../Components/ChatTextWrapper';
import TextField from '../../Components/ChatTextField';
import ChoiceContainer from '../../Components/ChoiceContainer';
import PrimaryChoice from '../../Components/PrimaryChoice';
import Section from '../../Components/ChatSection';
import HiddenInput from '../../Components/HiddenInput';
import Button from '../../Components/Button';
import Radio from '../../Components/Radio';
import Checkbox from '../../Components/Checkbox';
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
  Section,
  HiddenInput,
  Button,
  Radio,
  Checkbox,
};

export const defaultChatActions: ChatTraversalCallbacks = {
  next: () => undefined,
  jump: () => undefined,
  showExplanation: () => undefined,
  updateValue: () => undefined,
  toggleCheckbox: () => undefined,
  toggleRadio: () => undefined,
};
