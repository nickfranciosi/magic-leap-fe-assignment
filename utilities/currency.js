// @flow
/* eslint-disable import/prefer-default-export */
export const formatPrice = (priceString: string = ''): number =>
  parseInt(priceString.replace(',', ''), 10);
