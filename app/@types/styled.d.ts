import "styled-components";

interface IPalette {
  main: string;
  variant: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      commom: {
        white: string;
        light: string;
      };
      bg: IPalette;
      primary: IPalette;
    };
    container: {
      width: {
        lg: string;
        md: string;
        sm: string;
      };
    };
    transitions: {
      allEase400: string;
    };
  }
}
