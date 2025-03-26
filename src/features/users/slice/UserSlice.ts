import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../../redux/store';
import {IUserSliceData} from '../modal/UserModal';
import {getUser} from '../actions/userActions';

const initialState: IUserSliceData = {
  users: [],
  idCount: 0,
};

export const UserSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    deleteUser: (state, action) => {
      const id = action.payload;
      state.users = state.users.filter(user => user.id !== id);
    },
    updateUser: (state, action) => {
      const {id, name, username, email} = action.payload;
      if (id < 0) {
        state.users.unshift({...action.payload, id: state.idCount + 1});
        state.idCount = state.idCount + 1;
      } else {
        state.users = state.users.map(user =>
          user.id === id
            ? {...user, name, username, email} // Update fields
            : user,
        );
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(getUser.fulfilled, (state, response) => {
      state.users = response.payload;
      state.idCount = response.payload.length;
    });
  },
});

export const userData = (state: RootState) => state.userDetails;
export default UserSlice.reducer;

export const {deleteUser, updateUser} = UserSlice.actions;
