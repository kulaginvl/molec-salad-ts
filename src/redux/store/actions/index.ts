import axios from 'axios';
import { Dispatch } from 'react';
import { Action, ActionTypes } from '../../types';

export const getSalads = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.GET_SALADS_PANDING,
    });
    try {
      const { data } = await axios.get('http://test-job.webatom.ru/salads');

      dispatch({
        type: ActionTypes.GET_SALADS_SUCCESS,
        payload: data.result,
      });
    } catch (e: any) {
      dispatch({
        type: ActionTypes.GET_SALADS_ERROR,
        payload: e.message,
      });
    }
  };
};

export const getMoleculs = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.GET_MOLECULES_PANDING,
    });
    try {
      const { data } = await axios.get('http://test-job.webatom.ru/molecules');
      dispatch({
        type: ActionTypes.GET_MOLECULES_SUCCESS,
        payload: data.result,
      });
    } catch (e: any) {
      dispatch({
        type: ActionTypes.GET_MOLECULES_ERROR,
        payload: e.message,
      });
    }
  };
};
