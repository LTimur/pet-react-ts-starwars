import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type StarWarsCharacter = {
  name: string;
  url: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: [];
};

const initialState: StarWarsCharacter = [];

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setCharacter(state, action: PayloadAction<StarWarsCharacter>) {
      return action.payload;
    },
  },
});

export const { setCharacter } = characterSlice.actions;
export const characterReducer = characterSlice.reducer;
