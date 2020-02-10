import React from 'react';
import styled from 'styled-components';
import { defaultTheme } from '../../Theme';

const PreviousAnswersContainer = styled.div`
  max-width: 440px;
  margin-left: auto;
  /* overflow: hidden; */
  margin-top: 22px;

  :after {
    content: '';
    clear: both;
    display: table;
  }
`;

const PreviousAnswersContent = styled.div`
  float: right;
`;

const ChangeAnswer = styled.div`
  font-size: 14px;
  text-align: right;
  margin-top: 10px;
  color: rgb(117, 117, 117);
  font-weight: bold;
  max-width: 440px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-direction: row-reverse;
  margin-left: auto;
`;

const PreviousQuestion = React.forwardRef<any, any>(
  ({ jumpBack, children }, ref) => (
    <PreviousAnswersContainer ref={ref}>
      <PreviousAnswersContent>
        <div>{children}</div>
        <ChangeAnswer onClick={jumpBack}>Click to change</ChangeAnswer>
      </PreviousAnswersContent>
    </PreviousAnswersContainer>
  )
);

PreviousQuestion.defaultProps = {
  theme: defaultTheme,
};

export default PreviousQuestion;
