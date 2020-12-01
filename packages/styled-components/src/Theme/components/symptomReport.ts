import { BaseTheme } from '../base';
import colors from '../base/colors';

export interface SymptomReportTheme {
  message: {
    backgroundNormal: string;
    backgroundModerate: string;
    backgroundDanger: string;
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
    backgroundNormal: baseTheme.colors.normal,
    backgroundModerate: baseTheme.colors.moderate,
    backgroundDanger: baseTheme.colors.danger,
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
