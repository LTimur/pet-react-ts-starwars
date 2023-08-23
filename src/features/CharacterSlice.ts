import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Character } from '../entities/Character';

type CharacterProps = {
  character: Character
};

const initialState: CharacterProps = { character: {} as Character };

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setCharacter(state, action: PayloadAction<CharacterProps>) {
      return action.payload;
    },
  },
});

export const { setCharacter } = characterSlice.actions;
export const characterReducer = characterSlice.reducer;
