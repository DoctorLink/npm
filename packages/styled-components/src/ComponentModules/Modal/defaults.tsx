import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

import { defaultTheme } from '../../Theme';

import {
  BodyOverflowHidden,
  DelayExit,
  TransparentCurtain,
} from '../../Components';
import { ModalCallbacks } from './ModalCallbacks';

const BackDropMotion = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  height: 100%;
  right: 0;
  width: 100%;
  z-index: 100;
`;

const BackDrop: React.FC<any> = ({ children }) => (
  <BackDropMotion
    variants={{
      enter: {
        opacity: 1,
        transition: {
          default: { duration: 0.15 },
        },
      },
      exit: {
        opacity: 0,
        transition: {
          default: { duration: 0.15 },
        },
      },
    }}
    initial="exit"
    animate="enter"
    exit="exit"
  >
    {children}
  </BackDropMotion>
);

const Wrap = styled.div`
  box-sizing: border-box;
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  padding: 0 8px;
  white-space: nowrap;
  position: fixed;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  -webkit-animation-iteration-count: 2;
  animation-iteration-count: 2;
  zoom: 1;
  transform-style: preserve-3d;

  ::before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    margin-right: -0.25em;
  }
`;

const Container = styled.div`
  white-space: normal;
  cursor: auto;
  width: 100%;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin: 0 auto;
  text-align: left;
`;

const ModalMotion = styled(motion.div)`
  box-sizing: border-box;
  background-color: #fff;
  border-radius: ${(p) => p.theme.modal.borderRadius}px;
  padding: ${(p) => p.theme.modal.padding}px;
  text-align: left;
  position: relative;
  max-width: 650px;
  margin: 40px auto;
  font-family: ${(p) => p.theme.modal.fontFamily};
  font-size: ${(p) => p.theme.modal.fontSize}px;
  line-height: ${(p) => p.theme.modal.lineHeight}px;

  @media screen and (min-width: 400px) {
    padding: 20px 32px 32px;
  }
`;

ModalMotion.defaultProps = {
  theme: defaultTheme,
};

const Modal = React.forwardRef<any, any>(({ children }, ref) => (
  <ModalMotion
    ref={ref}
    variants={{
      enter: {
        y: 0,
        opacity: 1,
        transition: {
          y: { type: 'spring', stiffness: 1000, damping: 15, delay: 0.1 },
          default: { duration: 0.3, delay: 0.1 },
        },
      },
      exit: {
        y: 50,
        opacity: 0,
        transition: { duration: 0.3 },
      },
    }}
    initial="exit"
    animate="enter"
    exit="exit"
  >
    {children}
  </ModalMotion>
));

const Header = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Title = styled.h3`
  flex: 1;
  margin: 0 0 20px;
`;

const Body = styled.div``;

const Icon = styled.svg`
  fill: none;
  stroke: black;
  stroke-width: 2px;
  stroke-linecap: round;
  stroke-linejoin: round;
  cursor: pointer;
  width: 24px;
`;

const Close: React.FC<{ onClick: any }> = ({ onClick }) => (
  <Icon viewBox="0 0 24 24" onClick={onClick}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </Icon>
);

export const defaultModalComponents = {
  Wrapper: AnimatePresence,
  DelayExit,
  BodyOverflowHidden,
  TransparentCurtain,
  BackDrop,
  Wrap,
  Container,
  Modal,
  Header,
  Title,
  Close,
  Body,
};

export const defaultModalActions: ModalCallbacks = {
  close: () => undefined,
};
