import React from 'react';
import styled from 'styled-components';

const InfoButtonContainer = styled.div`
  height: 100%;
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 34px;
  max-height: 60px;
`;

const IconWrapper = styled.span`
  display: inline-flex;
  -webkit-box-align: inherit;
  align-items: inherit;
  -webkit-box-pack: inherit;
  justify-content: inherit;
  border-radius: 12px;
`;

const Icon = styled.svg`
  fill: rgb(16, 24, 213);
  width: 24px;
  height: 24px;
`;

const InfoButton = styled.button.attrs({ type: 'button' })`
  background: transparent;

  /* color: inherit; */
  border: 0;
  cursor: pointer;
  display: inline-flex;
  outline: none;
  /* padding: 0; */
  /* position: relative; */
  align-items: center;
  user-select: none;
  /* border-radius: 0; */
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;

  flex: 0 0 auto;
  width: 48px;
  color: rgba(0, 0, 0, 0.54);
  height: 48px;
  padding: 0;
  font-size: 1.5rem;
  text-align: center;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;

  position: absolute;
  right: 0px;
  top: 50%;
  transform: translate(50%, -50%);
  z-index: 1;

  &:hover {
    /* background: #00c4fa38; */
    ${Icon} {
      fill: rgb(9, 14, 127);
    }
  }

  &:focus {
    background: #00c4fa38;
    box-shadow: 0 0px 3px 2px #00c4fa;
    ${IconWrapper} {
      border-radius: 12px;
    }
  }
`;

const Lable05 = styled.span`
  width: 100%;
  display: flex;
  align-items: inherit;
  justify-content: inherit;
`;

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
        <Lable05>
          <IconWrapper>
            <Icon viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
            </Icon>
          </IconWrapper>
        </Lable05>
      </InfoButton>
    </InfoButtonContainer>
  );
};

export default ChatInfoIcon;
