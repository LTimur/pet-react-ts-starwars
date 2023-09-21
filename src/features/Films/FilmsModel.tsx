import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Film } from '../../entities/Film';

type FilmProps = {
  film: Film
};

const initialState: FilmProps[] = [];

const filmsModel = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setFilms(state, action: PayloadAction<FilmProps[]>) {
      return action.payload;
    },
  },
});

export const { setFilms } = filmsModel.actions;
export const filmsReducer = filmsModel.reducer;
