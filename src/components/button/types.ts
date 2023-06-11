import { ButtonVariant } from "./enums";

interface IButtonProps {
  onClick: () => void;
  title: string;
  variant: ButtonVariant;
  isLarge?: boolean;
}

interface IStyledButtonProps {
  $backgroundColor: string;
  $color: string;
  $isLarge?: boolean;
}

export type { IButtonProps, IStyledButtonProps };
