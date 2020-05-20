import React from 'react';
import { useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { StyledComponent } from 'styled-components';

import { defaultTheme } from '../../Theme';

import * as actions from '../../Actions';

import {
  BodyOverflowHidden,
  DelayExit,
  TransparentCurtain,
} from '../../Components';

const SummaryContainerDiv = styled(motion.div)`
  font-family: ${p => p.theme.summary.fontFamily};
  font-size: ${p => p.theme.summary.fontSize}px;
  line-height: ${p => p.theme.summary.lineHeight}px;
  padding: ${p => p.theme.summary.padding}px;
  background: white;
  position: fixed;
  top: 0;
  height: 100%;
  right: 0;
  max-width: 500px;
  width: 100%;
  border-left: 1px solid #f1f1f1;
  overflow-y: auto;
  box-sizing: border-box;
`;

// const Summary = posed(SummaryContainerDiv)({
//   enter: {
//     x: '0%',
//     y: '0%',
//     height: '100%',
//     staggerChildren: 25,
//     transition: {
//       x: { type: 'tween', easeing: 'easeInOut' },
//     },
//   },
//   exit: {
//     x: '100%',
//     y: '0%',
//     height: '100%',
//     transition: {
//       x: { type: 'tween', easeing: 'easeInOut' },
//     },
//   },
// });

SummaryContainerDiv.defaultProps = {
  theme: defaultTheme,
};

const Summary = React.forwardRef<any, any>(({ children }, ref) => (
  <SummaryContainerDiv
    ref={ref}
    initial="hidden"
    animate="show"
    exit="hidden"
    variants={{
      show: {
        x: '0%',
        y: '0%',
        height: '100%',
        transition: {
          x: { type: 'tween', easeing: 'easeInOut' },
          staggerChildren: 0.025,
        },
      },
      hidden: {
        x: '100%',
        y: '0%',
        height: '100%',
        transition: {
          x: { type: 'tween', easeing: 'easeInOut' },
        },
      },
    }}
  >
    {children}
  </SummaryContainerDiv>
));

export const createSummaryChild = (Component: StyledComponent<any, any>) =>
  React.forwardRef<any, any>(({ ...props }, ref) => (
    <Component
      {...props}
      ref={ref}
      variants={{
        show: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      {props.children}
    </Component>
  ));

const Header = createSummaryChild(styled(motion.div)`
  padding: 10px;
  display: flex;
  align-items: flex-start;
`);

const Title = styled.h2`
  flex: 1;
  margin: 0;
`;

const Empty = styled.h4`
  padding: 10px;
  margin: 0;
`;

const Question = createSummaryChild(styled(motion.div)`
  padding: 10px;
  border-bottom: 1px solid #f1f1f1;
  cursor: pointer;
`);

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

const QuestionText = styled.div`
  color: #666;
`;

const Answers = styled.div`
  color: ${p => p.theme.summary.color};
`;

Answers.defaultProps = {
  theme: defaultTheme,
};

const AnswerText = styled.div``;

const EmptyAnswerText = styled.div``;

export const defaultSummaryComponents = {
  Wrapper: AnimatePresence,
  DelayExit,
  BodyOverflowHidden,
  TransparentCurtain,
  Summary,
  Header,
  Title,
  Close,
  Empty,
  Question,
  QuestionText,
  Answers,
  AnswerText,
  EmptyAnswerText,
};

export const defaultSummaryActions = {
  close: () => undefined,
  jump: (algoId: any, nodeId: any) =>
    console.log(
      `summary jump is not implemented. AlgoId: ${algoId} NodeId: ${nodeId}`
    ),
};

export const BuildSummaryActions = (summary: any, containerRef: any) => {
  const dispatch = useDispatch();
  return {
    close: () => dispatch(actions.traversalSummarySet(null)),
    jump: (algoId: any, nodeId: any) =>
      dispatch(
        actions.traversalPrevious(
          summary.traversalId,
          algoId,
          nodeId,
          null,
          containerRef
        )
      ),
  };
};
