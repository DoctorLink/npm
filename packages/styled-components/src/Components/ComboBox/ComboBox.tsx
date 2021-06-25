import styled from 'styled-components';

export const ComboBoxWrapper = styled.div.attrs({ role: 'combobox' })`
  position: relative;
  width: 100%;
`;

export const ComboBoxList = styled.ul.attrs({ role: 'listbox' })`
  position: absolute;
  top: 55px; // Height of ChatTextWrapper + 1px
  left: 0;
  width: 100%;
  max-height: 300px;
  list-style: none;
  border: 1px solid rgb(222, 222, 222);
  border-radius: 3px;
  margin: 0;
  padding: 0;
  z-index: 100;
  overflow-y: auto;
  background-color: rgb(255, 255, 255);
`;

export const ComboBoxOption = styled.li.attrs({ role: 'option' })`
  margin: 0;
  padding: 8px 16px;
  line-height: 24px;
  font-size: 16px;
  cursor: pointer;

  &.focused {
    background-color: #f1f1fd;
  }
`;

export const ComboBoxPlaceholderOption = styled(ComboBoxOption)`
  color: rgb(154, 154, 154);
  font-style: italic;
`;
