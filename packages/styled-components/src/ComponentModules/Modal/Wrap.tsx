import styled from 'styled-components';

export const Wrap = styled.div`
  box-sizing: border-box;
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  padding: 0 8px;
  white-space: nowrap;
  position: fixed;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  -webkit-animation-iteration-count: 2;
  animation-iteration-count: 2;
  zoom: 1;
  transform-style: preserve-3d;

  ::before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    margin-right: -0.25em;
  }
`;
