import React from 'react';
import styled from 'styled-components';
import colors from '../../../Theme/base/colors';

const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 0.75rem;
`;

const Bar = styled.div`
  height: 8px;
  width: 100%;
  border-radius: 4px;
  margin-bottom: 8px;
  background: linear-gradient(
    270deg,
    ${colors.green100} 0%,
    ${colors.greenyellow} 25%,
    ${colors.orange200} 50%,
    ${colors.redgreen} 75%,
    ${colors.red300} 100%
  );
`;

const Labels: React.FC = () => (
  <TextWrapper>
    <span>Unhealthy</span>
    <span>Healthy</span>
  </TextWrapper>
);

const DialBar: React.FC = () => {
  return (
    <div>
      <Bar />
      <Labels />
    </div>
  );
};

export { DialBar };
