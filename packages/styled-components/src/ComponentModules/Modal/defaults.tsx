import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

import {
  BodyOverflowHidden,
  DelayExit,
  TransparentCurtain,
} from '../../Components';
import { Container } from './Container';
import { Close } from './Close';
import { BackDrop } from './BackDrop';
import { Header } from './Header';
import { ModalWindow } from './ModalWindow';
import { Title } from './Title';
import { Wrap } from './Wrap';
import { ModalCallbacks } from './ModalCallbacks';
import { ModalComponents } from './ModalComponents';

const Body = styled.div``;

export const defaultModalComponents: ModalComponents = {
  Wrapper: AnimatePresence,
  DelayExit,
  GlobalStyle: BodyOverflowHidden,
  TransparentCurtain,
  BackDrop,
  Wrap,
  Container,
  ModalWindow,
  Header,
  Title,
  Close,
  Body,
};

export const defaultModalActions: ModalCallbacks = {
  close: () => undefined,
};
