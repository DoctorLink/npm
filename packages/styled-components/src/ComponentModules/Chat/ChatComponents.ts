import {
  ButtonHTMLAttributes,
  ComponentType,
  HTMLAttributes,
  InputHTMLAttributes,
  RefAttributes,
} from 'react';
import { CheckboxProps, RadioProps } from '../../Components';
import { ChatFormProps } from '../../Components/ChatForm';
import { ChatInfoIconProps } from '../../Components/ChatInfoIcon';
import { ChatPreviousAnswerProps } from '../../Components/ChatPreviousAnswer';
import { ChatPreviousAnswersProps } from '../../Components/ChatPreviousAnswers';
import { ChatQuestionProps } from '../../Components/ChatQuestion';
import { ChatSectionProps } from '../../Components/ChatSection';
import { ChatTextWrapperProps } from '../../Components/ChatTextWrapper';
import { PrimaryChoiceProps } from '../../Components/PrimaryChoice';
import { ChatContainerProps } from './ChatContainer';

type HTMLComponentType<E, P = unknown> = ComponentType<
  HTMLAttributes<E> & RefAttributes<E> & P
>;

export interface ChatComponents {
  Container: HTMLComponentType<HTMLDivElement, ChatContainerProps>;
  Loader: ComponentType;
  Step: ComponentType<HTMLAttributes<HTMLDivElement>>;
  Form: ComponentType<ChatFormProps>;
  InfoIcon: ComponentType<ChatInfoIconProps>;
  Question: ComponentType<ChatQuestionProps>;
  PreviousAnswers: ComponentType<ChatPreviousAnswersProps>;
  PreviousAnswer: ComponentType<ChatPreviousAnswerProps>;
  TextWrapper: ComponentType<ChatTextWrapperProps>;
  TextField: ComponentType<InputHTMLAttributes<HTMLInputElement>>;
  ChoiceContainer: ComponentType<HTMLAttributes<HTMLDivElement>>;
  PrimaryChoice: ComponentType<PrimaryChoiceProps>;
  Section: ComponentType<ChatSectionProps>;
  HiddenInput: ComponentType<InputHTMLAttributes<HTMLInputElement>>;
  Button: ComponentType<ButtonHTMLAttributes<HTMLButtonElement>>;
  Radio: ComponentType<RadioProps>;
  Checkbox: ComponentType<CheckboxProps>;
}
