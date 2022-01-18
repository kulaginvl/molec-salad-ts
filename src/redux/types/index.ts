export enum ActionTypes {
  GET_SALADS_PANDING = 'GET_SALADS_PANDING',
  GET_SALADS_SUCCESS = 'GET_SALADS_SUCCESS',
  GET_SALADS_ERROR = 'GET_SALADS_ERROR',
  GET_MOLECULES_PANDING = 'GET_MOLECULES_PANDING',
  GET_MOLECULES_SUCCESS = 'GET_MOLECULES_SUCCESS',
  GET_MOLECULES_ERROR = 'GET_MOLECULES_ERROR',
}

interface ActionSaladsPending {
  type: ActionTypes.GET_SALADS_PANDING;
}
interface ActionSaladsSuccess {
  type: ActionTypes.GET_SALADS_SUCCESS;
  payload: any[];
}
interface ActionSaladsError {
  type: ActionTypes.GET_SALADS_ERROR;
  payload: string;
}
interface ActionMoleculesPending {
  type: ActionTypes.GET_MOLECULES_PANDING;
}
interface ActionMoleculesSuccess {
  type: ActionTypes.GET_MOLECULES_SUCCESS;
  payload: any[];
}
interface ActionMoleculesError {
  type: ActionTypes.GET_MOLECULES_ERROR;
  payload: string;
}

export type Action =
  | ActionSaladsPending
  | ActionSaladsSuccess
  | ActionSaladsError
  | ActionMoleculesPending
  | ActionMoleculesSuccess
  | ActionMoleculesError;
