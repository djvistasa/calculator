import styled from "styled-components";
import { calculateRem } from "../../utils";

// NOTE: change yourElementType to your preferred type: e.g button
const StyledCalculator = styled.div`
  width: ${calculateRem(390)};
  height: ${calculateRem(844)};
`;

const StyledDisplay = styled.div`
  height: 35%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  box-sizing: border-box;
  color: ${({
    theme: {
      colors: { white },
    },
  }) => white};
  padding: ${calculateRem(20)};
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  height: 65%;
  padding: ${calculateRem(20)};
  box-sizing: border-box;
`;

const StyledLeftSection = styled.div`
  button {
    margin-right: ${calculateRem(20)};
    margin-bottom: ${calculateRem(20)};
  }
`;

const StyledRightSection = styled.div`
  button {
    margin-bottom: ${calculateRem(20)};
  }
`;

const StyledTopLeftSection = styled.div`
  button {
    &:last-child {
      margin: 0;
    }
  }
`;

const StyledDisplayValue = styled.h1`
  font-size: ${calculateRem(50)};
`;

export {
  StyledButtonWrapper,
  StyledCalculator,
  StyledDisplay,
  StyledDisplayValue,
  StyledLeftSection,
  StyledTopLeftSection,
  StyledRightSection,
};
