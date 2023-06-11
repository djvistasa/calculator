/**
 *
 * Button
 *
 */

import { useTheme } from "styled-components";
import { ButtonVariant } from "./enums";
import { StyledButton } from "./styles";
import { IButtonProps } from "./types";

function Button({
  onClick,
  title,
  variant,
  isLarge,
}: IButtonProps): JSX.Element {
  const {
    colors: { vividGamboge, lightGray, darkLiver, white },
  } = useTheme();
  const getButtonColorFromVariant = () => {
    switch (variant) {
      case ButtonVariant.Primary:
        return vividGamboge;
      case ButtonVariant.Secondary:
        return lightGray;
      case ButtonVariant.Tertiary:
        return darkLiver;
      default:
        return darkLiver;
    }
  };

  const getButtonTextColorFromVariant = () => {
    switch (variant) {
      case ButtonVariant.Primary:
      case ButtonVariant.Tertiary:
        return white;
      case ButtonVariant.Secondary:
        return darkLiver;
      default:
        return darkLiver;
    }
  };
  return (
    <StyledButton
      onClick={onClick}
      $backgroundColor={getButtonColorFromVariant()}
      $color={getButtonTextColorFromVariant()}
      $isLarge={isLarge}
    >
      {title}
    </StyledButton>
  );
}

export default Button;
