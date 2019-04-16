export default baseTheme => ({
    width: baseTheme.spacing.inputField.width,
    height: baseTheme.spacing.inputField.height,
    fontFamily: baseTheme.typography.fontFamily,
    fontSize: baseTheme.typography.inputField.size,
    textAlign: baseTheme.typography.inputField.textAlign,
    spacing: baseTheme.spacing.padding,
    hoverColor: baseTheme.colors.brand100
})