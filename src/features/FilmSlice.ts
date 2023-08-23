import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Film } from '../entities/Film';

type FilmProps = {
  film: Film
};

const initialState: FilmProps = { film: {} as Film };

const filmSlice = createSlice({
  name: 'film',
  initialState,
  reducers: {
    setFilm(state, action: PayloadAction<FilmProps>) {
      return action.payload;
    },
  },
});

export const { setFilm } = filmSlice.actions;
export const filmReducer = filmSlice.reducer;
