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
  border-radius: 4px;
  background-color: white;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  margin-bottom: 30px;
  overflow: hidden;

  @media screen and (min-width: 800px) {
    margin-right: 10px;
  }
`;
