import styled from "styled-components";
import { calculateRem } from "../../utils";
import { IStyledButtonProps } from "./types";

// NOTE: change yourElementType to your preferred type: e.g button
const StyledButton = styled.button<IStyledButtonProps>`
  border: none;
  width: ${({ $isLarge }) => ($isLarge ? calculateRem(164) : calculateRem(72))};
  height: ${calculateRem(72)};
  border-radius: ${calculateRem(50)};
  font-size: ${calculateRem(25)};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  color: ${({ $color }) => $color};
`;

export { StyledButton };
