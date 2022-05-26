export as namespace reducers;

export interface ReportState {
  types: models.Type[];
  reportsList: models.ReportProps[];
}

export interface AuthState {
  authenticated: {
    accessToken: string | null;
  };
  logged: boolean;
}

export interface UserState {
  me: models.UserCreation | null;
}

export interface ReduxState {
  loading: number;
  auth: AuthState;
  user: UserState;
  report: ReportState;
}
