export as namespace reducers;
import Location from 'expo-location';

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
  location: Location.LocationObjectCoords | null;
}

export interface ReduxState {
  loading: number;
  auth: AuthState;
  user: UserState;
  report: ReportState;
}
