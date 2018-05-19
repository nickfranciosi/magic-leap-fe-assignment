// @flow
declare type Product = {
  name: string,
  manufacturer: string,
  class: string,
  price: string,
  techspecs: Techspecs
};

declare type Techspecs = {
  length: string,
  maxaccel: ?string,
  MGLT: ?string,
  maxatmosphericspeed: string,
  shielding: ?string,
  sensor: ?string,
  targeting: ?string,
  hull: string,
  armament: string,
  communications: string
};

declare function RemoveFromCart(id: string): void;
declare function AddToCart(id: string, quantit: number): void;
