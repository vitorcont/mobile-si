export as namespace reducers;

export interface AuthState {
  authenticated: {
    accessToken: string | null;
    refreshToken: string | null;
  };
  logged: boolean;
}

export interface LoadingState {
  global: number; // Loading Global
  button: number; // Loading em um Botão
  image: number; // Loading em uma imagem
}

export interface ReduxState {
  loading: LoadingState;
  auth: AuthState;
}
