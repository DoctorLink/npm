import styled from 'styled-components';

const IconButton = styled.button.attrs({ type: 'button' })`
  background: transparent;
  border: 0;
  cursor: pointer;
  display: inline-flex;
  outline: none;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;

  flex: 0 0 auto;
  width: 48px;
  height: 48px;
  padding: 0;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  z-index: 1;
`;

export default IconButton;
