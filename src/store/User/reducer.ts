import { USER_ME } from '../actionsType';

export const initialState: reducers.UserState = {
  me: null,
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USER_ME:
      return {
        ...state,
        me: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
