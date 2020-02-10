export default (baseTheme: any) => ({
  borderRadius: 0,
  padding: '15px 32px',
  fontFamily: baseTheme.typography.fontFamily,
  fontSize: baseTheme.typography.button.size,
  color: baseTheme.colors.brand100,
  hoverColor: baseTheme.colors.brand200,
  disabled: {
    color: baseTheme.colors.grey300,
    hoverColor: baseTheme.colors.grey300,
  },
});
