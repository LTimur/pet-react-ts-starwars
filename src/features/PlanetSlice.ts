import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Planet } from '../entities/Planet';

type PlanetProps = {
  planet: Planet
};

const initialState: PlanetProps = { planet: {} as Planet };

const planetSlice = createSlice({
  name: 'planet',
  initialState,
  reducers: {
    setPlanet(state, action: PayloadAction<PlanetProps>) {
      return action.payload;
    },
  },
});

export const { setPlanet } = planetSlice.actions;
export const planetReducer = planetSlice.reducer;
