import { useTheme } from 'styled-components';

export const useMessageColor = (level: number): string => {
  const theme = useTheme();
  const { message } = theme.symptomReport;
  switch (level) {
    case 3:
      return message.colorNormal;
    case 2:
      return message.colorModerate;
    default:
      return message.colorDanger;
  }
};
