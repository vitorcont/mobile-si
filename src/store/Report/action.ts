import navigationService from '@mobile/services/navigation';
import { GET_TYPES } from './../actionsType';
import { Dispatch } from 'redux';
import { startLoading, stopLoading } from '../Loading/action';
import Toaster from '@mobile/services/toaster';
import ReportAPI from '@mobile/repositories/report';

export const getTypes = () => async (dispatch: Dispatch) => {
  dispatch(startLoading());
  try {
    const payload = await ReportAPI.getTypes();
    dispatch({
      type: GET_TYPES,
      payload,
    });
  } catch (err) {
    Toaster.error('Erro', 'Não foi possível buscar os tipos no momento.');
  } finally {
    dispatch(stopLoading());
  }
};

export const createReport = (data: models.Report) => async (dispatch: Dispatch) => {
  dispatch(startLoading());
  try {
    console.log(data);
    await ReportAPI.create(data);
    Toaster.success('Sucesso', 'Ocorrência criada com sucesso!');
    navigationService.back();
  } catch (err) {
    Toaster.error('Erro', 'Não foi possível a ocorrência no momento momento.');
  } finally {
    dispatch(stopLoading());
  }
};
