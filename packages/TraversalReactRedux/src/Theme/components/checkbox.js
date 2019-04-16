
export default baseTheme => ({
    size: 20,
    borderRadius: 4,
    padding: baseTheme.spacing.padding,
    checked: { 
        color: baseTheme.colors.brand100 
    },
    unchecked: { 
        color: baseTheme.colors.brand50 
    },
    icon: { 
        color: baseTheme.colors.brand50 
    },
    focus: { 
        color: baseTheme.colors.lightBlue100 
    }
})