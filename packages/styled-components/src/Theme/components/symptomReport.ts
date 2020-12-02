import { BaseTheme } from '../base';
import colors from '../base/colors';

export interface SymptomReportTheme {
  message: {
    colorNormal: string;
    colorModerate: string;
    colorDanger: string;
  };
  messageTitle: {
    fontSize: number;
    fontWeight: number;
    fontFamily: string;
    lineHeight: number;
    paddingBottom: number;
  };
  panelHeaders: {
    textColor: string;
    reasonConclusions: string;
    otherConclusions: string;
    informationConclusions: string;
    dangerBullets: string;
    contactBullets: string;
    reasonBullets: string;
  };
}

export default (baseTheme: BaseTheme): SymptomReportTheme => ({
  message: {
    colorNormal: baseTheme.colors.normal,
    colorModerate: baseTheme.colors.moderate,
    colorDanger: baseTheme.colors.danger,
  },
  messageTitle: {
    fontSize: baseTheme.typography.title.medium.size * 1.2,
    fontWeight: 400,
    fontFamily: baseTheme.typography.fontFamily,
    lineHeight: baseTheme.typography.title.medium.lineHeight * 1.2,
    paddingBottom: baseTheme.spacing.padding,
  },
  panelHeaders: {
    textColor: baseTheme.colors.white,
    reasonConclusions: colors.brand100,
    otherConclusions: colors.brand100,
    informationConclusions: colors.brand100,
    dangerBullets: colors.danger,
    contactBullets: colors.moderate,
    reasonBullets: colors.lightBlue100,
  },
});
