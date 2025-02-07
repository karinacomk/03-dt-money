/* eslint-disable @typescript-eslint/no-empty-object-type */
//typescript-eslint.io/rules/no-empty-object-type

import "styled-components";
import { defaultTheme } from "../styles/themes/default";

type ThemeType = typeof defaultTheme; // exporta o tema

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
