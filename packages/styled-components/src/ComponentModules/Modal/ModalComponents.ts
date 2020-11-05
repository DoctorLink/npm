import { ComponentType, HTMLAttributes, RefAttributes } from 'react';
import { DelayExitProps } from '../../Components/DelayExit';
import { GlobalStyleComponent, DefaultTheme } from 'styled-components';
import { CloseProps } from './Close';

export interface ModalComponents {
  Wrapper: ComponentType;
  DelayExit: ComponentType<DelayExitProps>;
  GlobalStyle: GlobalStyleComponent<unknown, DefaultTheme>;
  TransparentCurtain: ComponentType;
  BackDrop: ComponentType;
  Wrap: ComponentType;
  Container: ComponentType;
  ModalWindow: ComponentType<RefAttributes<HTMLDivElement>>;
  Header: ComponentType;
  Title: ComponentType;
  Close: ComponentType<CloseProps>;
  Body: ComponentType<HTMLAttributes<HTMLElement>>;
}
