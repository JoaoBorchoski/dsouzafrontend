import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    h1, h2, h3, h4, h5, h6, span, a, li, button, input, p, select, label {
        font-family: 'Montserrat', sans-serif;
    }

    button {
        cursor: pointer;
        border: none;
        background: transparent;
    }

    a {
        text-decoration: none;
        color: unset;
    }

    body li {
        list-style: none;
    }

    input:focus,
    select:focus,
    textarea:focus {
        outline: 0;
    }
`;