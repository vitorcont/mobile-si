import { GET_TYPES } from '../actionsType';

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
    default:
      return state;
  }
};

export default reportReducer;
