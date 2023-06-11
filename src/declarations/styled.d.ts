import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      lightGray: string;
      eerieBlack: string;
      darkLiver: string;
      vividGamboge: string;
      white: string;
    };
    fonts: {
      sfProRegular: string;
    };
  }
}
