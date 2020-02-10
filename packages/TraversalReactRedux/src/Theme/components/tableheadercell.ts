export default (baseTheme: any) => ({
  padding: baseTheme.spacing.padding,
  fontFamily: baseTheme.typography.fontFamily,
  fontSize: baseTheme.typography.regular.size,
  lineHeight: baseTheme.typography.regular.lineHeight,
  errorColor: baseTheme.colors.red200,
  errorFontSize: baseTheme.typography.error.size,
});
