import { createGlobalStyle } from "styled-components"

export const GLobalStyle = createGlobalStyle`
    html {
        --bg_color: #150f0f;
        --main_bg: #e31837;
        --sec_bg: #ffc500;
    }
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Kanit', sans-serif;
    }
    body {
        width: 100vw;
        max-width: 100vw;
        overflow-x: hidden;
    }
    li {
        list-style: none;
    }
    a {
        text-decoration: none;
    }
`