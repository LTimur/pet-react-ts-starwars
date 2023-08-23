import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Planet } from '../entities/Planet';

type PlanetProps = {
  planet: Planet
};

const initialState: PlanetProps[] = [];

const planetsSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {
    setPlanets(state, action: PayloadAction<PlanetProps[]>) {
      return action.payload;
    },
  },
});

export const { setPlanets } = planetsSlice.actions;
export const planetsReducer = planetsSlice.reducer;
