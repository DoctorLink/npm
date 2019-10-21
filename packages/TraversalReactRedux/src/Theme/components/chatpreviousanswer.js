export default baseTheme => ({
    borderRadius: 6,
    padding: 16,
    fontFamily: baseTheme.typography.fontFamily,
    fontSize: baseTheme.typography.button.size,
    color: baseTheme.colors.brand100,
    hoverColor: baseTheme.colors.brand200,
})