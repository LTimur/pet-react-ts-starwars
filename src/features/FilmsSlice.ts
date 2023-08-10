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
  gender: string;
  homeworld: string;
  films: [];
  
};

const initialState: StarWarsFilm[] = [];

const charactersSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    setCharacters(state, action: PayloadAction<StarWarsFilm[]>) {
      return action.payload;
    },
  },
});

export const { setCharacters } = charactersSlice.actions;
export const charactersReducer = charactersSlice.reducer;
