import StorageService from '@mobile/services/storage';
import { Dispatch } from 'redux';

import AuthAPI from '@mobile/repositories/auth';
import navigationService from '@mobile/services/navigation';

import { AUTH_LOGGED, AUTH_LOGIN, LOGOUT } from '../actionsType';
import { startLoading, stopLoading } from '../Loading/action';
import { StorageItems } from '@mobile/enum/storage';
import Toaster from '@mobile/services/toaster';

export const authenticate = (userData: models.LoginRequest) => async (dispatch: Dispatch) => {
  dispatch(startLoading());
  try {
    const payload: models.LoginResponse = await AuthAPI.login(userData);
    Promise.resolve(await StorageService.setItem(StorageItems.ACCESS_TOKEN, payload.token));
    if (payload) {
      dispatch({
        type: AUTH_LOGIN,
        payload: {
          token: payload.token,
        },
      });
    }
    navigationService.reset({
      index: 0,
      routes: [{ name: 'Content' }],
    });
  } catch (err) {
    console.log(err);
    Toaster.error('Erro', 'Dados de Login inválidos');
  } finally {
    dispatch(stopLoading());
  }
};

export const recovery = (email: string) => async (dispatch: Dispatch) => {
  dispatch(startLoading());
  try {
    await AuthAPI.recovery(email);
    Toaster.success('Sucesso', 'E-mail enviado com sucesso! Verifique sua caixa de entrada.');
  } catch (err) {
    Toaster.error(
      'Erro',
      'Esse usuario não foi encontrado, verifique seus dados e tente novamente.'
    );
  } finally {
    dispatch(stopLoading());
  }
};

export const checkLogin = () => async (dispatch: any) => {
  dispatch(startLoading());
  //Check Login Method
  dispatch(stopLoading());
};

export const refreshToken = () => async (dispatch: Dispatch) => {
  dispatch(startLoading());
  const payload = await AuthAPI.refresh();
  if (payload) {
    dispatch({ type: AUTH_LOGIN, payload });
  }
  dispatch(stopLoading());
};

export const logout = () => async (dispatch: Dispatch) => {
  navigationService.reset({
    index: 0,
    routes: [{ name: 'Auth' }],
  });
  await StorageService.removeItem(StorageItems.ACCESS_TOKEN);
  dispatch({ type: LOGOUT });
};
