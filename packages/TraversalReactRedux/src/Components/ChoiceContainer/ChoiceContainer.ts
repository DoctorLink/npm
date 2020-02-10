import styled from 'styled-components';

const ChoiceContainer = styled.div`
  position: relative;
  border-width: 1px 1px 1px;
  border-style: none solid solid;
  border-color: rgb(200, 205, 215) rgb(200, 205, 215) rgb(200, 205, 215);
  border-image: initial;
  border-top: none;

  &:last-child {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    > label,
    > button {
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

export default ChoiceContainer;
