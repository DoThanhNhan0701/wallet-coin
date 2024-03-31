import 'styled-components';

import colors from './colors';
import fontSize from './fontSize';
import fontWeight from './fontWeight';
import breakpoints from './breakpoints';
import radius from './radius';
import shadow from './shadow';

export const defaultTheme = {
  colors,
  fontSize,
  fontWeight,
  breakpoints,
  radius,
  shadow,
  _color: {
    bgColor: '#151617',
    bgContentColor: '#1e2023',
    textColor: '#ffffff',
    iconColor: '#68d67c',
    header: '#1e2023',
  },
} as const;

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    fontSize: typeof fontSize;
    fontWeight: typeof fontWeight;
    breakpoints: typeof breakpoints;
    radius: typeof radius;
    shadow: typeof shadow;
    _color: {
      bgColor: string;
      bgContentColor: string;
      textColor: string;
      iconColor: string;
      header: string;
    };
  }
}
