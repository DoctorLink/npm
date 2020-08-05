## Example Theme

```js
import React from 'react'
import { createTheme, ThemeProvider } from '@doctorlink/traversal-react-redux';

const theme = createTheme({
    colors: {
        brand50: '#fdf1f1',
        brand100: 'red',
        brand200: 'darkred',
        lightBlue100: '#faa400',
        red200: 'green'
    },
    typography: {
        fontFamily: 'monospace'
    },
    spacing: {
        //  padding: 10
    }
})

const Comp = () =>
    (<ThemeProvider Theme={theme}>
        ...
    </ThemeProvider>)
```