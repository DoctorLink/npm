export interface SpacingTheme {
  padding: number;
  lineHeight: number;
  normal: number;
  horizontal: number;
  vertical: number;
  responseMargin: number;
  inputField: {
    width: number;
    height: number;
  };
}

const spacing: SpacingTheme = {
  padding: 16,
  lineHeight: 24,
  normal: 16,
  horizontal: 16,
  vertical: 20,
  responseMargin: 20,
  inputField: {
    width: 200,
    height: 40,
  },
};

export default spacing;
