import React from 'react';
import { PanelContainer, Panel } from '../../../Components';
import { MyNumbers } from './MyNumbers';
import { NumberConclusion } from '@doctorlink/traversal-core';

export const MyNumbersBox: React.FC<{
  numbersConclusions: NumberConclusion[];
}> = ({ numbersConclusions }) => {
  return (
    <PanelContainer>
      <Panel>
        <MyNumbers numbersConclusions={numbersConclusions}></MyNumbers>
      </Panel>
    </PanelContainer>
  );
};
