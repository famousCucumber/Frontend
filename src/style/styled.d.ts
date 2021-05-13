import "styled-components";

export interface IColors {
    c100: string;
    c300: string;
    c500: string;
    c700: string;
}

interface ISize {
    mobile: string;
}
declare module "styled-components" {
    export interface DefaultTheme {
        colors: IColors;
        sizes: ISize;
        borderSetting: string;
    }
}
