import styled from 'styled-components';
import { Dropdown } from './Dropdown';
import colors from '../../Theme/base/colors';

export const InlineDropdown = styled(Dropdown)`
  font: inherit;
  margin: 0 0.8rem;
  padding: 0 0.6rem;
  box-sizing: border-box;
  height: 40px;
  width: 100px;
  border: 1px solid ${colors.dropdownBorder};
  border-radius: 3px;
  background-color: ${colors.white};
  font-weight: 600;
  font-size: 1rem;
  text-indent: 12%;
  background-image: linear-gradient(
      45deg,
      transparent 50%,
      ${colors.grey400} 50%
    ),
    linear-gradient(135deg, ${colors.grey400} 50%, transparent 50%),
    linear-gradient(
      to right,
      ${colors.dropdownArrowBackground},
      ${colors.dropdownArrowBackground}
    );
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), 100% 0;
  background-size: 5px 5px, 5px 5px, 2.5em 2.5em;
  background-repeat: no-repeat;

  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
`;
