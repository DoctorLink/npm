import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i');

    html, body, #root {
        min-height: 100%;
        margin: 0
    }

    html {
        /* scroll-behavior: smooth; */
        font-family: 'Noto Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-weight: 500;
    }

    .body {
        position: relative;
        min-height: 100%;
        padding-bottom: 92px;
    }
`;
