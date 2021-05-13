import "styled-components";

export interface IColors {
    c100: string;
    c300: string;
    c500: string;
    c700: string;
}

declare module "styled-components" {
    export interface DefaultTheme {
        colors: IColors;
        borderSetting: string;
    }
}
