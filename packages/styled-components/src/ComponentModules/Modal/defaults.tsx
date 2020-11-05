import { AnimatePresence } from 'framer-motion';

import {
  BodyOverflowHidden,
  DelayExit,
  TransparentCurtain,
} from '../../Components';
import { Container } from './Container';
import { Close } from './Close';
import { BackDrop } from './BackDrop';
import { Body } from './Body';
import { Header } from './Header';
import { ModalWindow } from './ModalWindow';
import { Title } from './Title';
import { Wrap } from './Wrap';
import { ModalCallbacks } from './ModalCallbacks';
import { ModalComponents } from './ModalComponents';

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
