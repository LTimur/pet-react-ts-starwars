import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Character } from '../../entities/Character';

type CharacterProps = {
  character: Character
};

const initialState: CharacterProps[] = [];

const charactersModel = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters(state, action: PayloadAction<CharacterProps[]>) {
      return action.payload;
    },
  },
});

export const { setCharacters } = charactersModel.actions;
export const charactersReducer = charactersModel.reducer;
