import {createAsyncThunk} from '@reduxjs/toolkit';
import API from '../../../services/api';
import {IUser, IUserEndPoints} from '../modal/UserModal';
import {getUserEndPoints} from '../utility/UserUtility';

export const getUser = createAsyncThunk('actions/getUser', async () => {
  const promise = await API.get({
    endPoint: getUserEndPoints(IUserEndPoints.user),
    isLoader: true,
  });
  const response = await promise;
  return response;
});

export const createUser = createAsyncThunk(
  'actions/createUser',
  async (request: IUser) => {
    const promise = await API.post({
      endPoint: getUserEndPoints(IUserEndPoints.user),
      isLoader: true,
      params: request,
    });
    const response = await promise;
    return response;
  },
);

export const updateUser = createAsyncThunk(
  'actions/updateUser',
  async (id: number) => {
    const promise = await API.get({
      endPoint: `${getUserEndPoints(IUserEndPoints.user)}/${id}`,
      isLoader: true,
    });
    const response = await promise;
    return response;
  },
);

export const deleteUser = createAsyncThunk(
  'actions/deleteUser',
  async (id: number) => {
    const promise = await API.get({
      endPoint: `${getUserEndPoints(IUserEndPoints.user)}/${id}`,
      isLoader: true,
    });
    const response = await promise;
    return response;
  },
);
