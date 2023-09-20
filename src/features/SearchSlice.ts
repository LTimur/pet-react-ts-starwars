import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    query: '',
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

// todo:
// export const selectElementsByQuery = (state) => {
//   const query = state.query.query.toLowerCase();
//   return elements.filter((element) => element.name.toLowerCase().includes(query));
// };

export const { setSearchQuery } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
