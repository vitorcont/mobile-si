export as namespace reducers;

export interface AuthState {
  authenticated: {
    accessToken: string | null;
  };
  logged: boolean;
}

export interface ReduxState {
  loading: number;
  auth: AuthState;
}
