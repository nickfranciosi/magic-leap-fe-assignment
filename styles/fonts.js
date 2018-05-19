const sansSerifFallback = 'Helvetica, arial, sans-serif';
const monoSpaceFallback = 'monospace';

const fontFamilyUtil = (font, fallBack = sansSerifFallback) =>
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

export default {
  sizes,
  fontFamilies
};
