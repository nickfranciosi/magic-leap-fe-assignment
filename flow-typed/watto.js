// @flow
/* eslint-disable no-use-before-define */
declare type AppState = {
  loading: boolean,
  products: ?(Product[]),
  cart: ?(CartEntry[])
};

declare type CartEntry = {
  id: string,
  quantity: number
};

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
declare function AddToCart(id: string, quantity: number): void;
type Action = {
  type: string,
  payload?: any
};

// Redux
type GetState = () => AppState;
type PromiseAction = Promise<Action>;
type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
type Dispatch = (action: Action | ThunkAction | PromiseAction) => any;
