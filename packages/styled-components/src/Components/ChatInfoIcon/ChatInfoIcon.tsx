import React from 'react';
import styled from 'styled-components';
import { defaultTheme } from '../../Theme';
import IconButton from '../IconButton';

const InfoButtonContainer = styled.div`
  height: 100%;
  max-height: 60px;
`;

const Icon = styled.svg`
  fill: ${(p) => p.theme.infoicon.color};
  width: ${(p) => p.theme.infoicon.size}px;
  height: ${(p) => p.theme.infoicon.size}px;
`;

Icon.defaultProps = {
  theme: defaultTheme,
};

const InfoButton = styled(IconButton)`
  &:hover {
    ${Icon} {
      fill: ${(p) => p.theme.infoicon.hoverColor};
    }
  }

  &:focus {
    ${Icon} {
      fill: ${(p) => p.theme.infoicon.focusColor};
    }
  }
`;

InfoButton.defaultProps = {
  theme: defaultTheme,
};

export interface ChatInfoIconProps {
  explanation: string | null | undefined;
  showExplanation: (explanation: string) => void;
}

const ChatInfoIcon: React.FC<ChatInfoIconProps> = ({
  explanation,
  showExplanation,
}) => {
  if (!explanation || explanation === '' || !showExplanation) return null;
  return (
    <InfoButtonContainer>
      <InfoButton
        onClick={(e) => {
          e.preventDefault();
          showExplanation(explanation);
        }}
      >
        <Icon viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </Icon>
      </InfoButton>
    </InfoButtonContainer>
  );
};

export default ChatInfoIcon;
