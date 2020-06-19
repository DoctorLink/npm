import { defaultTheme } from '../../Theme';
import styled from 'styled-components';
import { Dropdown } from '../Dropdown/Dropdown';

export const Text = styled.span`
  font-family: ${p => p.theme.typography.fontFamily};
  font-size: ${p => p.theme.typography.title.small.size}px;
  line-height: ${p => p.theme.typography.title.small.lineHeight}px;
  width: 100px;
`;
Text.defaultProps = { theme: defaultTheme };

export const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Select = styled(Dropdown)`
  font-family: ${p => p.theme.typography.fontFamily};
  font-size: ${p => p.theme.typography.inputField.size}px;
`;
Select.defaultProps = { theme: defaultTheme };

export const Content = styled.div`
  margin-top: 30px;
  max-width: 1240px;
  width: 100%;
  display: table;
  box-sizing: border-box;
`;
Content.defaultProps = { theme: defaultTheme };
