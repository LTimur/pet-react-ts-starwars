import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type StarWarsFilm = {
  url: string;
  episode_id: number;
  title: string;
  release_date: string;
  director: string;
  producer: string;
  opening_crawl: string;
  planets: [];
  films: [];

};

const initialState: StarWarsFilm = [];

const filmSlice = createSlice({
  name: 'film',
  initialState,
  reducers: {
    setFilm(state, action: PayloadAction<StarWarsFilm>) {
      return action.payload;
    },
  },
});

export const { setFilm } = filmSlice.actions;
export const filmReducer = filmSlice.reducer;
