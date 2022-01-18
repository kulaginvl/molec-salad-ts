import { Action, ActionTypes } from '../../types';

export interface Molecule {
  _id: string;
  title: string;
  qty: number;
  price: number;
  discount_price: number;
  image: string;
  __v: number;
}

interface MoleculesState {
  items: Molecule[];
  loading: boolean;
  error: null | string;
}

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export const moleculesReducer = (state: MoleculesState = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.GET_MOLECULES_PANDING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.GET_MOLECULES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case ActionTypes.GET_MOLECULES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
