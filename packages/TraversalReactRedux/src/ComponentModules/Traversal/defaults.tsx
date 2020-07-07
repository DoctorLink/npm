import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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

const Button = styled(SimpleButton)`
  width: 100%;
`;

const transition = {
  x: { duration: 0.25, ease: 'easeInOut' },
};

const variants = {
  enter: (mirror: boolean) => ({
    opacity: 0,
    x: mirror === true ? '-100%' : '100%',
    transition: transition,
  }),
  center: {
    zIndex: 1,
    opacity: 1,
    x: '0',
    transition: transition,
  },
  exit: (mirror: boolean) => ({
    zIndex: 0,
    opacity: 0,
    x: mirror === true ? '100%' : '-100%',
    transition: transition,
  }),
};

const Nodes: React.FC<any> = ({ children, mirror }) => (
  <motion.div
    variants={variants}
    custom={mirror}
    initial="enter"
    animate="center"
    exit="exit"
  >
    {children}
  </motion.div>
);

const Form = styled.form``;

const Container = styled.div`
  transition: all 300ms;
`;

const Collection: React.FC<{ mirror: boolean }> = ({ mirror, children }) => (
  <AnimatePresence custom={mirror} exitBeforeEnter>
    {children}
  </AnimatePresence>
);

const TraversalRadio: React.FC<{
  Comp: any;
  answerId: any;
  checked: any;
  siblingIds: any;
  action: any;
}> = ({ Comp, answerId, checked, siblingIds, action }) => (
  <Comp
    id={answerId}
    name={answerId.substring(0, answerId.lastIndexOf('_'))}
    value={true}
    checked={checked}
    onChange={() => {}}
    onClick={(e: any) => action(e, answerId, siblingIds, true)}
  />
);

const TraversalCheckbox: React.FC<{
  Comp: any;
  answerId: any;
  checked: any;
  siblingIds: any;
  action: any;
}> = ({ Comp, answerId, checked, siblingIds, action }) => (
  <Comp
    id={answerId}
    value={true}
    checked={checked}
    onChange={(e: any) => action(e, answerId, siblingIds)}
  />
);

const TraversalValue: React.FC<{
  Comp: any;
  answerId: any;
  value: any;
  siblingIds: any;
  action: any;
}> = ({ Comp, answerId, value, siblingIds, action }) => (
  <Comp
    value={value || ''}
    onChange={(e: any) => action(answerId, siblingIds, e.target.value)}
  />
);

export const defaultTraversalComponents = {
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
  showExplanation: (_explanation: any) => undefined,
  updateValue: (_answerId: any, _questionAnswerIds: any, _value: any) =>
    undefined,
  toggleCheckbox: (_event: any, _answerId: any, _questionAnswerIds: any) =>
    undefined,
  toggleRadio: (_event: any, _answerId: any, _questionAnswerIds: any) =>
    undefined,
};
