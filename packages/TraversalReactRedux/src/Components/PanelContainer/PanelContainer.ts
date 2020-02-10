import styled from 'styled-components';
import posed from 'react-pose';

const PosedPanel = posed.div({
  enter: {
    opacity: 1,
    y: '0%',
  },
  exit: {
    y: '100%',
    opacity: 0,
  },
});

export default styled(PosedPanel)`
  box-sizing: border-box;
  padding: 0 10px;
  float: ${p => p.float || 'left'};

  @media screen and (min-width: 800px) {
    width: 50%;
  }

  @media screen and (max-width: 799px) {
    width: 100%;
  }
`;
