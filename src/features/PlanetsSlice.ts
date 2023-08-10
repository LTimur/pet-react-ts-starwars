import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type StarWarsPlanet = {
  url: string;
  name: string;
  climate: string;
  terrain: string;
  population: string;
  diameter: string;
  orbital_period: string;
  rotation_period: string;
  gravity: string;
  surface_water: number;
  films: [];
  
};

const initialState: StarWarsPlanet[] = [];

const charactersSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    setCharacters(state, action: PayloadAction<StarWarsPlanet[]>) {
      return action.payload;
    },
  },
});

export const { setCharacters } = charactersSlice.actions;
export const charactersReducer = charactersSlice.reducer;
