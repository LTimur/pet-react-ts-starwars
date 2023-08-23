import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Character } from '../entities/Character';

type CharacterProps = {
  character: Character
};

const initialState: CharacterProps[] = [];

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters(state, action: PayloadAction<CharacterProps[]>) {
      return action.payload;
    },
  },
});

export const { setCharacters } = charactersSlice.actions;
export const charactersReducer = charactersSlice.reducer;
