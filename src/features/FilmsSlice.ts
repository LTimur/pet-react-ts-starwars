import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

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

const initialState: StarWarsFilm[] = [];

const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    setFilms(state, action: PayloadAction<StarWarsFilm[]>) {
      return action.payload;
    },
  },
});

export const { setFilms } = filmsSlice.actions;
export const filmsReducer = filmsSlice.reducer;
