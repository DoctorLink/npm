import styled from 'styled-components';
import PanelContent from '../PanelContent';

export default styled(PanelContent)`
  border-bottom: 1px solid #cacaca;
  &:last-of-type {
    border-bottom: none;
  }
`;
