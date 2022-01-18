import { combineReducers } from 'redux';
import { moleculesReducer } from './moleculesReducer';
import { saladsReducer } from './saladsReducer';

export const reducers = combineReducers({
  salads: saladsReducer,
  molecules: moleculesReducer,
});

export type RootState = ReturnType<typeof reducers>;
