import styled from 'styled-components';
import PrimaryChoice, { PrimaryChoiceProps } from '../PrimaryChoice';

export type SecondaryChoiceProps = PrimaryChoiceProps;

const SecondaryChoice = styled(PrimaryChoice)<SecondaryChoiceProps>`
  color: black;
  text-align: center;
  font-weight: bold;
`;

export default SecondaryChoice;
