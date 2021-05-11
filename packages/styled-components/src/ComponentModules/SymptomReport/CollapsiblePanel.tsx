import React from 'react';
import { AccordionBody, AccordionHeader } from '../../Components';
import { useToggle } from '../../Hooks';
import { useTheme } from '../../Theme';
import { SymptomReportComponents } from './SymptomReportComponents';

interface CollapsiblePanelProps {
  title: string;
  headerColor: string;
  collapse?: boolean;
  components: SymptomReportComponents;
}

export const CollapsiblePanel: React.FC<CollapsiblePanelProps> = ({
  title,
  headerColor,
  collapse,
  components,
  children,
}) => {
  const [open, toggleOpen] = useToggle(!collapse);
  const theme = useTheme();

  const { Panel, Header, Title } = components;

  return (
    <Panel>
      <Header color={headerColor}>
        <AccordionHeader open={open} toggleOpen={toggleOpen}>
          <Title color={theme.symptomReport.panelHeaders.textColor}>
            {title}
          </Title>
        </AccordionHeader>
      </Header>
      <AccordionBody open={open}>{children}</AccordionBody>
    </Panel>
  );
};
