import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../Actions';
import {
  InfoIcon,
  PanelBlocks as Blocks,
  PanelContainer as Container,
  Panel,
  PanelHeader as Header,
  PanelTitle as Title,
  PanelContent as Content,
  PanelConclusion as Conclusion,
  PanelBodyText as BodyText,
  PanelConclusionTitle as ConclusionTitle,
  PanelSVG,
} from '../../Components';

const Icon: React.FC<{ state: any }> = ({ state }) => {
  if (state === 1)
    return (
      <PanelSVG width="24" height="24" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12" y2="16"></line>
      </PanelSVG>
    );

  if (state === 2)
    return (
      <PanelSVG width="24" height="24" viewBox="0 0 24 24">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
        <line x1="12" y1="9" x2="12" y2="13"></line>
        <line x1="12" y1="17" x2="12" y2="17"></line>
      </PanelSVG>
    );

  return (
    <PanelSVG width="24" height="24" viewBox="0 0 24 24">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </PanelSVG>
  );
};

const Info: React.FC<any> = ({ ...props }) => (
  <InfoIcon inline={true} {...props} />
);

export const defaultSymptomReportComponents = {
  Blocks,
  Container,
  Panel,
  Header,
  Icon,
  Title,
  Content,
  BodyText,
  Conclusion,
  ConclusionTitle,
  Info,
};

export const defaultSymptomReportActions = {
  showExplanation: (_explanation: any) => undefined,
};

export const BuildSymptomReportActions = () => {
  const dispatch = useDispatch();
  return {
    showExplanation: (explanation: any) =>
      dispatch(actions.populateModal(explanation, 'Explanation')),
  };
};
