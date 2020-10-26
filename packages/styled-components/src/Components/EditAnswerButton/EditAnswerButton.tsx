import React from 'react';
import styled from 'styled-components';
import { defaultTheme } from '../../Theme';
import IconButton from '../IconButton';

const Icon = styled.svg`
  fill: ${(p) => p.theme.editAnswerIcon.color};
  width: ${(p) => p.theme.editAnswerIcon.size}px;
  height: ${(p) => p.theme.editAnswerIcon.size}px;
`;

Icon.defaultProps = {
  theme: defaultTheme,
};

const Button = styled(IconButton)`
  &:hover {
    ${Icon} {
      fill: ${(p) => p.theme.editAnswerIcon.hoverColor};
    }
  }

  &:focus {
    ${Icon} {
      fill: ${(p) => p.theme.editAnswerIcon.focusColor};
    }
  }
`;

Button.defaultProps = {
  theme: defaultTheme,
};

export interface EditAnswerButtonProps {
  onClick: () => void;
}

const EditAnswerButton: React.FC<EditAnswerButtonProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <Icon viewBox="0 0 20 20">
        <path d="M17.038,16.17975 C17.038,17.06075 16.322,17.80375 15.441,17.80375 L2.662,17.80375 C1.781,17.80375 1.065,17.06075 1.065,16.17975 L1.065,3.40075 C1.065,2.51975 1.781,1.82975 2.662,1.82975 L10.116,1.82975 L10.116,0.76575 L2.662,0.76575 C1.194,0.76575 0,1.93375 0,3.40175 L0,16.17975 C0,17.64775 1.194,18.86775 2.662,18.86775 L15.44,18.86775 C16.908,18.86775 18.102,17.64675 18.102,16.17975 L18.102,8.75175 L17.037,8.75175 L17.037,16.17975 L17.038,16.17975 Z" />
        <path d="M18.238,0.60375 C17.434,-0.20125 16.031,-0.20125 15.226,0.60375 L8.083,7.74675 C8.015,7.81475 7.966,7.90075 7.943,7.99375 L7.191,11.00475 C7.146,11.18575 7.199,11.37775 7.331,11.51075 C7.432,11.61175 7.568,11.66675 7.707,11.66675 C7.75,11.66675 7.793,11.66175 7.836,11.65075 L10.848,10.89775 C10.942,10.87475 11.027,10.82575 11.095,10.75775 L18.238,3.61475 C18.64,3.21275 18.862,2.67775 18.862,2.10875 C18.862,1.53975 18.641,1.00575 18.238,0.60375 Z M10.447,9.90075 L8.439,10.40275 L8.941,8.39475 L14.85,2.48575 L16.356,3.99175 L10.447,9.90075 Z M17.485,2.86175 L17.109,3.23775 L15.603,1.73175 L15.979,1.35575 C16.381,0.95375 17.083,0.95375 17.485,1.35575 C17.686,1.55675 17.797,1.82375 17.797,2.10875 C17.797,2.39375 17.686,2.66075 17.485,2.86175 Z" />
      </Icon>
    </Button>
  );
};

export default EditAnswerButton;
