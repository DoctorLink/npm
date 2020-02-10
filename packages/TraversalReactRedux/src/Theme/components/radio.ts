export default (baseTheme: any) => ({
  size: baseTheme.typography.regular.lineHeight,
  padding: baseTheme.spacing.padding,
  checked: {
    color: baseTheme.colors.brand100,
  },
  unchecked: {
    color: baseTheme.colors.grey250,
  },
  icon: {
    color: baseTheme.colors.brand50,
  },
  focus: {
    color: baseTheme.colors.lightBlue100,
  },
});
