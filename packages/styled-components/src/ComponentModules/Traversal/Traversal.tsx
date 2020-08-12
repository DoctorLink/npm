import React, { MutableRefObject } from 'react';
import styled from 'styled-components';
import { defaultTheme } from '../../Theme';
import { TraversalState } from '@doctorlink/traversal-core';
import {
  defaultTraversalActions,
  defaultTraversalComponents,
} from './defaults';
import { TraversalForm } from './TraversalForm';
import { TraversalCallbacks } from './TraversalCallbacks';
import { TraversalComponents } from './TraversalComponents';

const FlexButton = styled.div`
  flex: 1;
`;

const PrevButton = styled(FlexButton)``;

const SummaryButton = styled(FlexButton)`
  @media screen and (min-width: 450px) {
    flex: none;
    margin-left: auto;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonGroup = styled.div`
  display: flex;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${Buttons} {
    @media screen and (min-width: 450px) {
      flex-direction: row;
    }
  }
  ${PrevButton} {
    margin-right: ${(p) => p.theme.spacing.padding}px;
  }
  ${ButtonGroup} {
    margin-bottom: ${(p) => p.theme.spacing.padding}px;
    @media screen and (min-width: 450px) {
      margin-bottom: 0;
    }
  }
`;

Container.defaultProps = {
  theme: defaultTheme,
};

export interface TraversalLabels {
  next: string;
  previous: string;
  summary: string;
}

export interface TraversalProps {
  traversal: TraversalState;
  containerRef?: MutableRefObject<any>;
  minWidthTable?: number;
  labels?: TraversalLabels;
  actions?: TraversalCallbacks;
  components?: Partial<TraversalComponents>;
}

export const Traversal: React.FC<TraversalProps> = ({
  traversal,
  containerRef,
  minWidthTable = 700,
  labels = {
    next: 'Next',
    previous: 'Previous',
    summary: 'Summary',
  },
  actions = defaultTraversalActions,
  components = defaultTraversalComponents,
}) => {
  const comps = { ...defaultTraversalComponents, ...components };
  return (
    <Container>
      <TraversalForm
        containerRef={containerRef}
        traversal={traversal}
        minWidthTable={minWidthTable}
        actions={actions}
        components={comps}
      >
        <Buttons>
          <ButtonGroup>
            <PrevButton>
              <comps.Button
                type="button"
                disabled={traversal.loading || traversal.previousDisabled}
                onClick={actions.previous}
              >
                {labels.previous}
              </comps.Button>
            </PrevButton>
            <FlexButton>
              <comps.Button
                type="submit"
                disabled={traversal.loading || traversal.nextDisabled}
              >
                {labels.next}
              </comps.Button>
            </FlexButton>
          </ButtonGroup>
          {actions.showSummary && (
            <SummaryButton>
              <comps.Button type="button" onClick={actions.showSummary}>
                {labels.summary}
              </comps.Button>
            </SummaryButton>
          )}
        </Buttons>
      </TraversalForm>
    </Container>
  );
};
