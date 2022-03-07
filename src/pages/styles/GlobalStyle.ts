import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }

    a:link {
        text-decoration: inherit;
        color: inherit;
    }

    a:visited {
        text-decoration: inherit;
        color: inherit;
    }
`;