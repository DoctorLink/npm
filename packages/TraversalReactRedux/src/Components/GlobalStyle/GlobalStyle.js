import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i');

    html, body, #root {
        height: 100%;
        margin: 0
    }

    html {
        scroll-behavior: smooth;
    }

    .body {
        position: relative;
        min-height: 100%;
        padding-bottom: 92px;
    }
`