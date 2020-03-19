import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { defaultTheme } from '../../Theme';

import * as actions from '../../Actions';
import { useDispatch } from 'react-redux';

export interface IClearButton {
  readonly show: boolean;
}

const Wrapper = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  width: ${p => p.theme.textfield.width}px;
  height: ${p => p.theme.textfield.height}px;
  font-family: ${p => p.theme.textfield.fontFamily};
  font-size: ${p => p.theme.textfield.fontSize}px;
  text-align: ${p => p.theme.textfield.textAlign};
  border: 1px solid ${p => p.theme.textfield.borderColor};
  border-radius: 3px;
  transition: all 150ms;
  &:focus {
    outline: 0;
    border-color: ${p => p.theme.textfield.hoverColor};
    box-shadow: ${p => p.theme.textfield.focusColor} 0px 0px 3px 2px;
  }
  position: relative;
`;

const StyledClearButton = styled.button<IClearButton>`
  position: relative;
  padding: 4px;
  border: 1px solid transparent;
  background-color: transparent;
  display: ${p => (p.show ? 'inline-block' : 'none')};
  vertical-align: middle;
  outline: 0;
  cursor: pointer;
  &:after {
    content: 'X';
    display: block;
    width: 15px;
    height: 15px;
    position: absolute;
    background-color: #e50f0f;
    z-index: 1;
    right: 185px;
    top: 0;
    bottom: 0;
    margin: auto;
    padding: 2px;
    border-radius: 50%;
    text-align: center;
    color: white;
    font-weight: normal;
    font-size: 12px;
    box-shadow: 0 0 2px #e50f0f;
    cursor: pointer;
  }
`;

StyledInput.defaultProps = {
  theme: defaultTheme,
};

const ClearButton: React.FC<any> = ({
  textField,
  show,
  setShow,
  updateStore,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (textField.current != null) {
      textField.current.onkeyup = () => {
        if (textField.current.value === '') setShow(false);
        else {
          setShow(true);
          if (updateStore) updateStore(textField.current.value);
        }
      };
    }
  }, [dispatch, textField]);

  const clear = (textField: any) => {
    textField.current.value = '';
    setShow(false);
    dispatch(actions.memberCreateSet(''));
  };
  return (
    <StyledClearButton
      show={show}
      onClick={(e: any) => {
        e.preventDefault();
        clear(textField);
      }}
    ></StyledClearButton>
  );
};

const TextFieldWithClear: React.FC<any> = ({
  className,
  checked,
  ...props
}) => {
  const inputRef = React.createRef<HTMLInputElement>();
  const [show, setShow] = useState(props.value !== '');
  useEffect(() => {
    setShow(props.value !== '');
  });

  return (
    <Wrapper>
      <StyledInput ref={inputRef} className={className} {...props} />
      <ClearButton
        textField={inputRef}
        show={show}
        setShow={setShow}
        updateStore={props.updateStore}
      />
    </Wrapper>
  );
};

export default TextFieldWithClear;
