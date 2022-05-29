import { USER_LOCATION } from './../actionsType';
import { USER_ME } from '../actionsType';

export const initialState: reducers.UserState = {
  me: null,
  location: null,
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USER_ME:
      return {
        ...state,
        me: action.payload,
      };
    case USER_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
