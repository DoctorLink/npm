import styled from 'styled-components';

import QuestionTitle from '../../Components/QuestionTitle';
import Question from '../../Components/Question';
import InfoIcon from '../../Components/InfoIcon';
import Fieldset from '../../Components/Fieldset';
import ErrorText from '../../Components/ErrorText';
import AlgoName from '../../Components/AlgoName';
import SimpleButton from '../../Components/Button';
import TableQuestion from '../../Components/TableQuestion';
import HeaderRow from '../../Components/TableHeaderRow';
import HeaderCell from '../../Components/TableHeaderCell';
import QuestionRow from '../../Components/TableQuestionRow';
import AnswerCell from '../../Components/TableAnswerCell';
import Response from '../../Components/Response';
import Section from '../../Components/Section';
import DisplayText from '../../Components/DisplayText';
import Label from '../../Components/Label';
import Radio from '../../Components/Radio';
import Checkbox from '../../Components/Checkbox';
import DateField from '../../Components/DateField';
import NumberField from '../../Components/NumberField';
import TextField from '../../Components/TextField';
import { TraversalCallbacks } from './TraversalCallbacks';
import { TraversalComponents } from './TraversalComponents';
import { TraversalNodes as Nodes } from './TraversalNodes';
import { TraversalCollection as Collection } from './TraversalCollection';
import { TraversalCheckbox, TraversalRadio, TraversalValue } from './inputs';

const Button = styled(SimpleButton)`
  width: 100%;
`;

const Form = styled.form``;

const Container = styled.div`
  transition: all 300ms;
`;

export const defaultTraversalComponents: TraversalComponents = {
  Button,
  Form,
  AlgoName,
  ErrorText,
  QuestionTitle,
  Question,
  InfoIcon,
  Nodes,
  Fieldset,
  Container,
  Collection,
  TableQuestion,
  HeaderRow,
  HeaderCell,
  QuestionRow,
  AnswerCell,
  Response,
  Section,
  Label,
  DisplayText,
  Radio,
  Checkbox,
  DateField,
  NumberField,
  TextField,
  TraversalValue,
  TraversalRadio,
  TraversalCheckbox,
};

export const defaultTraversalActions: TraversalCallbacks = {
  next: () => undefined,
  previous: () => undefined,
  showSummary: () => undefined,
  showExplanation: () => undefined,
  updateValue: () => undefined,
  toggleCheckbox: () => undefined,
  toggleRadio: () => undefined,
};
