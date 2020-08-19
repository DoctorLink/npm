import React from 'react';
import { PanelContainer, PanelContent, PanelBox } from '../../../Components';
import { MyNumbers } from './MyNumbers';

export const MyNumbersBox: React.FC<{
  numbersConclusions: any;
}> = ({ numbersConclusions }) => {
  return (
    <PanelContainer>
      <PanelBox>
        <MyNumbers numbersConclusions={numbersConclusions}></MyNumbers>
      </PanelBox>
    </PanelContainer>
  );
};
