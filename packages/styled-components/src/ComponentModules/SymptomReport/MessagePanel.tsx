import { SymptomReportModel } from '@doctorlink/traversal-core';
import React from 'react';
import { SymptomReportComponents } from './SymptomReportComponents';

export const MessagePanel: React.FC<{
  symptomReport: SymptomReportModel;
  components: SymptomReportComponents;
}> = ({ symptomReport, components }) => {
  const { Message, Title, Content, BodyText } = components;
  const { messageLevel, messageTitle, messageDescription } = symptomReport;

  return (
    <Message level={messageLevel}>
      <Content>
        <Title color="inherit">{messageTitle}</Title>
        <BodyText
          dangerouslySetInnerHTML={{
            __html: messageDescription,
          }}
        />
      </Content>
    </Message>
  );
};
