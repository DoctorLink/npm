import styled from 'styled-components';
import PrimaryChoice, { PrimaryChoiceProps } from '../PrimaryChoice';

export type SecondaryChoiceProps = PrimaryChoiceProps & {
  checked?: boolean;
};

const SecondaryChoice = styled(PrimaryChoice)<SecondaryChoiceProps>`
  background-color: ${(p) =>
    p.checked ? 'rgb(241, 241, 253)' : 'rgb(237, 239, 241)'};
  color: black;
  text-align: center;
  font-weight: bold;
`;

export default SecondaryChoice;
