import React from 'react';
import colors from '../../Theme/base/colors';
import {
  defaultSymptomReportActions,
  defaultSymptomReportComponents,
} from './defaults';

export const SymptomReport: React.FC<{
  symptomReport: any;
  actions?: any;
  components?: any;
}> = ({
  symptomReport,
  actions = defaultSymptomReportActions,
  components = defaultSymptomReportComponents,
}) => {
  const comps = { ...defaultSymptomReportComponents, ...components };

  const level = () => {
    switch (symptomReport.messageLevel) {
      case 3:
        return colors.normal;
      case 2:
        return colors.moderate;
      default:
        return colors.danger;
    }
  };

  return (
    <comps.Wrapper animateOnMount={true}>
      <comps.Panel fullWidth={true} key="header" id="Traversal">
        <comps.Header color={level()}>
          <comps.Icon state={symptomReport.messageLevel} />
          <comps.Title>{symptomReport.messageTitle}</comps.Title>
        </comps.Header>
        <comps.Content>
          <comps.BodyText
            dangerouslySetInnerHTML={{
              __html: symptomReport.messageDescription,
            }}
          ></comps.BodyText>
        </comps.Content>
      </comps.Panel>
      <comps.Blocks key="bullets">
        <comps.Container float={'right'} animateOnMount={true}>
          {symptomReport.dangerBullets &&
            symptomReport.dangerBullets.length > 0 && (
              <comps.Panel>
                <comps.Header color={colors.danger}>
                  <comps.Title>{symptomReport.dangerBulletTitle}</comps.Title>
                </comps.Header>
                {symptomReport.dangerBullets.map((bullet: any, i: any) => (
                  <comps.Conclusion key={i}>
                    <comps.BodyText>{bullet.displayText}</comps.BodyText>
                  </comps.Conclusion>
                ))}
              </comps.Panel>
            )}
          {symptomReport.contactBullets &&
            symptomReport.contactBullets.length > 0 && (
              <comps.Panel>
                <comps.Header color={colors.moderate}>
                  <comps.Title>{symptomReport.contactBulletTitle}</comps.Title>
                </comps.Header>
                {symptomReport.contactBullets.map((bullet: any, i: any) => (
                  <comps.Conclusion key={i}>
                    <comps.BodyText>{bullet.displayText}</comps.BodyText>
                  </comps.Conclusion>
                ))}
              </comps.Panel>
            )}
        </comps.Container>
        <comps.Container key="concs">
          {symptomReport.reasonConclusions &&
            symptomReport.reasonConclusions.length > 0 && (
              <comps.Panel>
                <comps.Header color={colors.brand100}>
                  <comps.Title>
                    {symptomReport.reasonConclusionTitle}
                  </comps.Title>
                </comps.Header>
                {symptomReport.reasonConclusions.map(
                  (conclusion: any, i: any) => (
                    <comps.Conclusion key={i}>
                      <comps.ConclusionTitle>
                        {conclusion.displayText}
                      </comps.ConclusionTitle>
                      <comps.Info
                        onClick={actions.showExplanation}
                        explanation={conclusion.explanation}
                      />
                      <comps.BodyText>{conclusion.truncated}</comps.BodyText>
                    </comps.Conclusion>
                  )
                )}
              </comps.Panel>
            )}
          {symptomReport.otherConclusions &&
            symptomReport.otherConclusions.length > 0 && (
              <comps.Panel>
                <comps.Header color={colors.brand100}>
                  <comps.Title>
                    {symptomReport.otherConclusionTitle}
                  </comps.Title>
                </comps.Header>
                {symptomReport.otherConclusions.map(
                  (conclusion: any, i: any) => (
                    <comps.Conclusion key={i}>
                      <comps.ConclusionTitle>
                        {conclusion.displayText}
                      </comps.ConclusionTitle>
                      <comps.Info
                        onClick={actions.showExplanation}
                        explanation={conclusion.explanation}
                      />
                    </comps.Conclusion>
                  )
                )}
              </comps.Panel>
            )}
          {symptomReport.informationConclusions &&
            symptomReport.informationConclusions.length > 0 && (
              <comps.Panel>
                <comps.Header color={colors.brand100}>
                  <comps.Title>
                    {symptomReport.informationConclusionTitle}
                  </comps.Title>
                </comps.Header>
                {symptomReport.informationConclusions.map(
                  (conclusion: any, i: any) => (
                    <comps.Conclusion key={i}>
                      <comps.ConclusionTitle>
                        {conclusion.displayText}
                      </comps.ConclusionTitle>
                      <comps.Info
                        onClick={actions.showExplanation}
                        explanation={conclusion.explanation}
                      />
                    </comps.Conclusion>
                  )
                )}
              </comps.Panel>
            )}
        </comps.Container>
        <comps.Container key="reasons">
          {symptomReport.reasonBullets &&
            symptomReport.reasonBullets.length > 0 && (
              <comps.Panel>
                <comps.Header color={colors.lightBlue100}>
                  <comps.Title>{symptomReport.reasonBulletTitle}</comps.Title>
                </comps.Header>
                {symptomReport.reasonBullets.map((bullet: any, i: any) => (
                  <comps.Conclusion key={i}>
                    <comps.BodyText bold={i === 0}>
                      {bullet.displayText}
                    </comps.BodyText>
                  </comps.Conclusion>
                ))}
              </comps.Panel>
            )}
        </comps.Container>
      </comps.Blocks>
    </comps.Wrapper>
  );
};
