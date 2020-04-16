import React, { useState } from 'react';
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
  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSubmit();
  };

  const [memberRef, setMemeberRef] = useState<any>();
  return (
    <Div>
      <form onSubmit={e => handleSubmit(e)}>
        <Label>
          <Text>Member Reference:</Text>
          <TextField
            value={memberRef || ''}
            onChange={(e: any) => setMemeberRef(e.target.value)}
          />
        </Label>
        <Button type="submit">Submit</Button>
      </form>
    </Div>
  );
};

export default CreateMember;
