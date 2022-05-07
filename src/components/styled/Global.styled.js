import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        scroll-behavior: smooth;
        font-style: 18px;
        background: ${({ theme }) => theme.colors.neutral.veryLightGray};
    }
    body {
        font-family: Public Sans, Tahoma, Geneva, Verdana, sans-serif;
        overflow-x: hidden;
    }

    
`;

export default GlobalStyle;
