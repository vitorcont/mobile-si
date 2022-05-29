import { GET_TYPES, GET_REPORTS } from '../actionsType';

export const initialState: reducers.ReportState = {
  reportsList: [],
  types: [],
};

export const reportReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case GET_REPORTS:
      return {
        ...state,
        reportsList: action.payload,
      };
    default:
      return state;
  }
};

export default reportReducer;
