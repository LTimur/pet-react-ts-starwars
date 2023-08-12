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

const initialState: StarWarsPlanet = [];

const planetSlice = createSlice({
  name: "planet",
  initialState,
  reducers: {
    setPlanet(state, action: PayloadAction<StarWarsPlanet>) {
      return action.payload;
    },
  },
});

export const { setPlanet } = planetSlice.actions;
export const planetReducer = planetSlice.reducer;
