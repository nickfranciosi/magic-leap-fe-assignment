// @flow
type FontSizes = {
  base: string,
  medium: string,
  header: string,
  detail: string
};

type FontFamilies = {
  primary: string,
  secondary: string,
  accent: string
};

type Fonts = {
  sizes: FontSizes,
  fontFamilies: FontFamilies
};

const sansSerifFallback = 'Helvetica, arial, sans-serif';
const monoSpaceFallback = 'monospace';

const fontFamilyUtil = (font: string, fallBack: string = sansSerifFallback) =>
  `'${font}', ${fallBack}`;

const fontFamilies = {
  primary: fontFamilyUtil('Lato'),
  secondary: fontFamilyUtil('Raleway'),
  accent: fontFamilyUtil('Space Mono', monoSpaceFallback)
};

const sizes = {
  base: '16px',
  medium: '24px',
  header: '32px',
  detail: '11px'
};

const fonts: Fonts = {
  sizes,
  fontFamilies
};

export default fonts;
