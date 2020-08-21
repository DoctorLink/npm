import React from 'react';
import { PanelContainer, PanelContent, PanelBox } from '../../../Components';
import { MyNumbers } from './MyNumbers';
import { NumberConclusion } from '@doctorlink/traversal-core';

export const MyNumbersBox: React.FC<{
  numbersConclusions: NumberConclusion[];
}> = ({ numbersConclusions }) => {
  return (
    <PanelContainer>
      <PanelBox>
        <MyNumbers numbersConclusions={numbersConclusions}></MyNumbers>
      </PanelBox>
    </PanelContainer>
  );
};
