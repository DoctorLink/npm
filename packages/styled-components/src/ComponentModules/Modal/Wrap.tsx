import styled from 'styled-components';

export const Wrap = styled.div`
  box-sizing: border-box;
  text-align: center;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  padding: 0 8px;
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  -webkit-animation-iteration-count: 2;
  animation-iteration-count: 2;
  zoom: 1;
  transform-style: preserve-3d;

  /* This keeps smaller modals centered vertically and prevents tall ones from disappearing off the top of the screen */
  ::before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
`;
