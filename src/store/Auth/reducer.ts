import { AUTH_LOGIN, AUTH_LOGGED } from '../actionsType';

export const initialState: reducers.AuthState = {
  authenticated: {
    accessToken: null,
  },
  logged: false,
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        authenticated: action.payload,
      };
    case AUTH_LOGGED:
      return {
        ...state,
        logged: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
