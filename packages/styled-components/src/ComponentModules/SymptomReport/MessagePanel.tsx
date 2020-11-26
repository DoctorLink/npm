import { SymptomReportModel } from '@doctorlink/traversal-core';
import React from 'react';
import colors from '../../Theme/base/colors';
import { SymptomReportComponents } from './SymptomReportComponents';

const headerColor = (messageLevel: number) => {
  switch (messageLevel) {
    case 3:
      return colors.normal;
    case 2:
      return colors.moderate;
    default:
      return colors.danger;
  }
};

export const MessagePanel: React.FC<{
  symptomReport: SymptomReportModel;
  components: SymptomReportComponents;
}> = ({ symptomReport, components }) => {
  const { Panel, Header, Icon, Title, Content, BodyText } = components;
  const { messageLevel, messageTitle, messageDescription } = symptomReport;

  return (
    <Panel id="Traversal">
      <Header color={headerColor(messageLevel)}>
        <Icon state={messageLevel} />
        <Title>{messageTitle}</Title>
      </Header>
      <Content>
        <BodyText
          dangerouslySetInnerHTML={{
            __html: messageDescription,
          }}
        />
      </Content>
    </Panel>
  );
};
