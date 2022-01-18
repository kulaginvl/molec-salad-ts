import { Action, ActionTypes } from '../../types';

export interface Salad {
  id: number;
  _id: string;
  composition: string;
  title: string;
  price: number;
  discount_price: number;
  __v: number;
}
interface SaladsState {
  items: Salad[];
  loading: boolean;
  error: null | string;
}

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export const saladsReducer = (state: SaladsState = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.GET_SALADS_PANDING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.GET_SALADS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case ActionTypes.GET_SALADS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
