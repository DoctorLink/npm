export default (baseTheme: any) => ({
  width: baseTheme.spacing.inputField.width,
  height: baseTheme.spacing.inputField.height,
  fontFamily: baseTheme.typography.fontFamily,
  fontSize: baseTheme.typography.inputField.size,
  textAlign: baseTheme.typography.inputField.textAlign,
  borderColor: baseTheme.colors.grey250,
  hoverColor: baseTheme.colors.brand100,
  focusColor: baseTheme.colors.lightBlue100,
});
