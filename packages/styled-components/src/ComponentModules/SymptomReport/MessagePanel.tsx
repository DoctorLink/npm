import { SymptomReportModel } from '@doctorlink/traversal-core';
import React from 'react';
import { SymptomReportComponents } from './SymptomReportComponents';
import { useMessageColor } from './useMessageColor';

export const MessagePanel: React.FC<{
  symptomReport: SymptomReportModel;
  components: SymptomReportComponents;
}> = ({ symptomReport, components }) => {
  const { Message, MessageTitle, Content, BodyText, Icon } = components;
  const { messageLevel, messageTitle, messageDescription } = symptomReport;
  const color = useMessageColor(messageLevel);

  return (
    <Message color={color}>
      <Content>
        <MessageTitle>
          <Icon state={messageLevel} /> {messageTitle}
        </MessageTitle>
        <BodyText
          dangerouslySetInnerHTML={{
            __html: messageDescription,
          }}
        />
      </Content>
    </Message>
  );
};
