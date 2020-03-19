import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { defaultTheme } from '../../Theme';
import { Button, TextField } from '..';

const Text = styled.span`
  font-family: ${p => p.theme.typography.fontFamily};
  font-size: ${p => p.theme.typography.title.small.size}px;
  line-height: ${p => p.theme.typography.title.small.lineHeight}px;
  width: 150px;
`;

const Div = styled.div`
  min-height: 160px;
  margin: 20px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

Text.defaultProps = {
  theme: defaultTheme,
};

Div.defaultProps = {
  theme: defaultTheme,
};

const CreateMember: React.FC<{ onSubmit: any }> = ({ onSubmit }) => {
  useEffect(() => {
    const handleKeyDown = (event: any) => {
      console.log(event.key);
      console.log(event.keycode);
      if (event.key === 'Enter') onSubmit({ memberReference: memberRef });
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  const [memberRef, setMemeberRef] = useState<any>();
  return (
    <Div>
      <Label>
        <Text>Member Reference:</Text>
        <TextField
          value={memberRef || ''}
          onChange={(e: any) => setMemeberRef(e.target.value)}
        />
      </Label>
      <Button
        onClick={e => {
          e.preventDefault();
          onSubmit({ memberReference: memberRef });
        }}
      >
        Submit
      </Button>
    </Div>
  );
};
export default CreateMember;
