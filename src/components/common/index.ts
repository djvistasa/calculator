import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const StyledApplicationWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({
    theme: {
      colors: { eerieBlack },
    },
  }) => eerieBlack};
`;

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {

    box-sizing: border-box;
    font-family: ${({
      theme: {
        fonts: { sfProRegular },
      },
    }) => sfProRegular};
  }
  /* other styles */
`;

export { GlobalStyle, StyledApplicationWrapper };
