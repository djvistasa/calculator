import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import Calculator from "./components/calculator/index.tsx";
import {
  GlobalStyle,
  StyledApplicationWrapper,
} from "./components/common/index.ts";
import "./fonts.css";
import { theme } from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledApplicationWrapper>
        <Calculator />
      </StyledApplicationWrapper>
    </ThemeProvider>
  </React.StrictMode>
);
