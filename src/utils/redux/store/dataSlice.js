import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isMovieList: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,

  reducers: {
    setMovieList: (state, action) => {
      state.isMovieList = action.payload ?? state.isMovieList;
    },
  },
});

export const {setMovieList} = dataSlice.actions;
export default dataSlice.reducer;
