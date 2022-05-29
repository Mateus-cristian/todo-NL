import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;

      backgroundPrimary: string;
      backgroundSecondary: string;
      backgroundBody: string;
      border: string;
      borderActive: string;
      span: string;
      h2: string;
      h2Alt: string;
      h3: string;
      button: string;
      th: string;
      td: string;
    };
  }
}
