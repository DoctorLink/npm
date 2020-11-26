import { HTMLMotionProps } from 'framer-motion';
import { ComponentType, HTMLAttributes } from 'react';
import { InfoIconProps } from '../../Components';
import { PanelBlocksProps } from '../../Components/PanelBlocks';
import { PanelBodyTextProps } from '../../Components/PanelBodyText/PanelBodyText';
import { PanelContainerProps } from '../../Components/PanelContainer';
import { PanelHeaderProps } from '../../Components/PanelHeader';
import { IconProps } from './Icon';

export interface SymptomReportComponents {
  Blocks: ComponentType<PanelBlocksProps>;
  Container: ComponentType<PanelContainerProps>;
  Panel: ComponentType<HTMLMotionProps<'div'>>;
  Header: ComponentType<PanelHeaderProps>;
  Icon: ComponentType<IconProps>;
  Title: ComponentType;
  Content: ComponentType;
  BodyText: ComponentType<PanelBodyTextProps & HTMLAttributes<HTMLDivElement>>;
  Conclusion: ComponentType;
  ConclusionTitle: ComponentType;
  Info: ComponentType<InfoIconProps>;
}
