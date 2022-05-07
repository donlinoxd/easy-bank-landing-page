import GlobalStyle from "./Global.styled";
import { ThemeProvider } from "styled-components";

const theme = {
  screen: {
    md: "min-width: 768px",
    lg: "min-width: 1024px",
  },
  colors: {
    primary: {
      blue: "hsl(233, 26%, 24%)",
      green: "hsl(136, 65%, 51%)",
      cyan: "hsl(192, 70%, 51%)",
    },
    neutral: {
      white: "hsl(0, 0%, 100%)",
      grayBlue: "hsl(233, 8%, 62%)",
      lightGrayBlue: "hsl(220, 16%, 96%)",
      veryLightGray: "hsl(0, 0%, 98%)",
    },
  },
};

const ThemeStyledProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default ThemeStyledProvider;
