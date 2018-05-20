// @flow
import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';
import fonts from './fonts';

export default () => injectGlobal`
  ${reset}
  body {
    font-size: ${fonts.sizes.base}
  }
`;
