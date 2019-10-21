import React from 'react';
// import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import CreateTheme from '../Theme';

const CustomThemeProvider = ({ Theme, children }) => (
    <ThemeProvider theme={Theme}>
        {/* ThemeProvider can only accept single parent node so must use Fragment */}
        <React.Fragment>
            {/* <BaseTheme.ImportFont /> */}
            {children}
        </React.Fragment>
    </ThemeProvider>
);

// CustomThemeProvider.propTypes = {
//     BaseTheme: PropTypes.object,
//     children: PropTypes.node.isRequired,
//     ComponentTheme: PropTypes.func,
// }

CustomThemeProvider.defaultProps = {
    Theme: CreateTheme()
}

export default CustomThemeProvider