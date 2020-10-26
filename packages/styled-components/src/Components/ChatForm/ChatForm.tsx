import React from 'react';
import styled from 'styled-components';
import { motion, HTMLMotionProps } from 'framer-motion';

const HiddenSubmit = styled.input.attrs({
  type: 'submit',
  tabIndex: -1,
})`
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
`;

const Form = styled(motion.form)`
  padding: 0;
  margin: 0;
  border: 0;
  border-top: 0;
  display: flex;
  flex-direction: column;
`;

export interface ChatFormProps extends HTMLMotionProps<'form'> {
  disableSubmit: boolean;
}

const ChatForm = React.forwardRef<HTMLFormElement, ChatFormProps>(
  function ChatForm({ disableSubmit, ...props }, ref) {
    return (
      <Form ref={ref} {...props}>
        {<HiddenSubmit disabled={disableSubmit} />}
        {props.children}
      </Form>
    );
  }
);

export default ChatForm;
