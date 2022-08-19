import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    colors: {
      primary: string;
      secondary: string;
      switchSpan: string;
      switchButton: string;
      placeholder: string;
      background: string;
      backgroundImage: string;
      boxShadow: string;
      boxBackground: string;
    };
  }
}
