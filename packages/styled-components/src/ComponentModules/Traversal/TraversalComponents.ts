import { HTMLMotionProps } from 'framer-motion';
import {
  ComponentType,
  ButtonHTMLAttributes,
  FormHTMLAttributes,
  HTMLAttributes,
  RefAttributes,
} from 'react';
import {
  TraversalQuestionProps,
  InfoIconProps,
  TableHeaderCellProps,
  TableAnswerCellProps,
  SectionProps,
  RadioProps,
  CheckboxProps,
} from '../../Components';
import {
  TraversalCheckboxProps,
  TraversalRadioProps,
  TraversalValueProps,
} from './inputs';
import { TraversalNodesProps } from './TraversalNodes';
import { TraversalCollectionProps } from './TraversalCollection';

type HTMLComponentType<E> = ComponentType<HTMLAttributes<E> & RefAttributes<E>>;

export interface TraversalComponents {
  Button: ComponentType<ButtonHTMLAttributes<HTMLButtonElement>>;
  Form: ComponentType<FormHTMLAttributes<HTMLFormElement>>;
  AlgoName: HTMLComponentType<HTMLHeadingElement>;
  ErrorText: HTMLComponentType<HTMLDivElement>;
  QuestionTitle: HTMLComponentType<HTMLHeadingElement>;
  Question: ComponentType<TraversalQuestionProps>;
  InfoIcon: ComponentType<InfoIconProps>;
  Nodes: ComponentType<TraversalNodesProps>;
  Fieldset: ComponentType<HTMLMotionProps<'fieldset'>>;
  Container: HTMLComponentType<HTMLDivElement>;
  Collection: ComponentType<TraversalCollectionProps>;
  TableQuestion: ComponentType;
  HeaderRow: ComponentType;
  HeaderCell: ComponentType<TableHeaderCellProps>;
  QuestionRow: HTMLComponentType<HTMLTableRowElement>;
  AnswerCell: ComponentType<TableAnswerCellProps>;
  Response: HTMLComponentType<HTMLDivElement>;
  Section: ComponentType<SectionProps>;
  Label: HTMLComponentType<HTMLLabelElement>;
  DisplayText: HTMLComponentType<HTMLDivElement>;
  Radio: ComponentType<RadioProps>;
  Checkbox: ComponentType<CheckboxProps>;
  DateField: HTMLComponentType<HTMLInputElement>;
  NumberField: HTMLComponentType<HTMLInputElement>;
  TextField: HTMLComponentType<HTMLInputElement>;
  TraversalValue: ComponentType<TraversalValueProps>;
  TraversalRadio: ComponentType<TraversalRadioProps>;
  TraversalCheckbox: ComponentType<TraversalCheckboxProps>;
}
