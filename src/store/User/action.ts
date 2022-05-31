import { authenticate } from './../Auth/action';
import { USER_ME, USER_LOCATION } from './../actionsType';
import StorageService from '@mobile/services/storage';
import { Dispatch } from 'redux';

import AuthAPI from '@mobile/repositories/auth';
import navigationService from '@mobile/services/navigation';

import { AUTH_LOGGED, AUTH_LOGIN, LOGOUT } from '../actionsType';
import { startLoading, stopLoading } from '../Loading/action';
import { StorageItems } from '@mobile/enum/storage';
import Toaster from '@mobile/services/toaster';
import UserAPI from '@mobile/repositories/user';
import { getUserLocation } from '@mobile/services/location';

export const createUser = (userData: models.UserCreation) => async (dispatch: Dispatch) => {
  dispatch(startLoading());
  try {
    await UserAPI.create(userData);
    Toaster.success('Sucesso', 'Usuário cadastrado com sucesso.');
    dispatch(authenticate({ email: userData.email, password: userData.password }));
  } catch (err) {
    Toaster.error('Erro', 'Dados de Cadastro Inválidos, verifique seus dados e tente novamente.');
  } finally {
    dispatch(stopLoading());
  }
};

export const getMe = (navigate?: boolean) => async (dispatch: Dispatch) => {
  dispatch(startLoading());
  try {
    const payload = await UserAPI.me();
    dispatch({
      type: USER_ME,
      payload,
    });
  } catch (err) {
    Toaster.error(
      'Erro',
      'Não foi possível buscar os dados desse usuário no momento, tente novamente mais tarde'
    );
    navigationService.reset({
      index: 0,
      routes: [{ name: 'Auth' }],
    });
  } finally {
    dispatch(stopLoading());
  }
};

export const setLocation = () => async (dispatch: Dispatch) => {
  const userLocation = await getUserLocation();
  dispatch({
    type: USER_LOCATION,
    payload: userLocation,
  });
};
