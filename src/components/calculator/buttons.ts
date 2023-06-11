import { ButtonVariant } from "../button/enums";

const operators = [
  {
    id: 0,
    value: "+",
    variant: ButtonVariant.Primary,
  },
  {
    id: 1,
    value: "-",
    variant: ButtonVariant.Primary,
  },
  {
    id: 2,
    value: "*",
    variant: ButtonVariant.Primary,
  },
  {
    id: 3,
    value: "/",
    variant: ButtonVariant.Primary,
  },
  {
    id: 11,
    value: "=",
    variant: ButtonVariant.Primary,
  },
];

const numbers = [
  {
    id: 0,
    value: "7",
    variant: ButtonVariant.Tertiary,
  },
  {
    id: 1,
    value: "8",
    variant: ButtonVariant.Tertiary,
  },
  {
    id: 2,
    value: "9",
    variant: ButtonVariant.Tertiary,
  },
  {
    id: 3,
    value: "4",
    variant: ButtonVariant.Tertiary,
  },
  {
    id: 4,
    value: "5",
    variant: ButtonVariant.Tertiary,
  },
  {
    id: 5,
    value: "6",
    variant: ButtonVariant.Tertiary,
  },
  {
    id: 6,
    value: "1",
    variant: ButtonVariant.Tertiary,
  },
  {
    id: 7,
    value: "2",
    variant: ButtonVariant.Tertiary,
  },
  {
    id: 8,
    value: "3",
    variant: ButtonVariant.Tertiary,
  },
];

const bottomRow = [
  {
    id: 0,
    value: "0",
    isLarge: true,
    variant: ButtonVariant.Tertiary,
  },
  {
    id: 1,
    value: ".",
    variant: ButtonVariant.Tertiary,
  },
];

const topRow = [
  {
    id: 0,
    value: "AC",
    variant: ButtonVariant.Secondary,
  },
  {
    id: 1,
    value: "+/-",
    variant: ButtonVariant.Secondary,
  },
  {
    id: 2,
    value: "%",
    variant: ButtonVariant.Secondary,
  },
];

export { bottomRow, numbers, operators, topRow };
