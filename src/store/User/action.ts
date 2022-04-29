import StorageService from '@mobile/services/storage';
import { Dispatch } from 'redux';

import AuthAPI from '@mobile/repositories/auth';
import navigationService from '@mobile/services/navigation';

import { AUTH_LOGGED, AUTH_LOGIN, LOGOUT } from '../actionsType';
import { startLoading, stopLoading } from '../Loading/action';
import { StorageItems } from '@mobile/enum/storage';
import Toaster from '@mobile/services/toaster';
import UserAPI from '@mobile/repositories/user';

export const createUser = (userData: models.UserCreation) => async (dispatch: Dispatch) => {
  dispatch(startLoading());
  try {
    await UserAPI.create(userData);
    Toaster.success('Sucesso', 'Usuário cadastrado com sucesso.');
  } catch (err) {
    Toaster.error('Erro', 'Dados de Cadastro Inválidos, verifique seus dados e tente novamente.');
  } finally {
    dispatch(stopLoading());
  }
};
