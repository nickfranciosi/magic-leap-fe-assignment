import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';

export default () => injectGlobal`
  ${reset}
  h1 {
    font-family: 'Lato', Helvetica, Arial, sans-serif;
  }

  h2 {
    font-family: 'Raleway', Arial, sans-serif;
  }
`;
