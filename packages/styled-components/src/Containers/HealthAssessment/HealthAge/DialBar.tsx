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
  height: 24px;
  width: 100%;
  background: linear-gradient(
    270deg,
    ${colors.green100} 0%,
    ${colors.greenyellow} 25%,
    ${colors.orange200} 50%,
    ${colors.redgreen} 75%,
    ${colors.red300} 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${TextWrapper} {
    color: ${colors.white};
    padding: 0 2%;
  }
`;

const ThinBar = styled(Bar)`
  height: 8px;
  border-radius: 4px;
  margin-bottom: 8px;
`;

const Labels: React.FC = () => (
  <TextWrapper>
    <span>Unhealthy</span>
    <span>Healthy</span>
  </TextWrapper>
);

const DialBar: React.FC = () => {
  return (
    <Bar>
      <Labels />
    </Bar>
  );
};

const DialBarMini: React.FC = () => (
  <div>
    <ThinBar />
    <Labels />
  </div>
);

export { DialBar, DialBarMini };
