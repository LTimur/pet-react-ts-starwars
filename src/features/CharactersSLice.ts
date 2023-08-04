import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type StarWarsCharacter = {
  name: string;
  url: string;
};

const initialState: StarWarsCharacter[] = [];

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setCharacters(state, action: PayloadAction<StarWarsCharacter[]>) {
      return action.payload;
    },
  },
});

export const { setCharacters } = charactersSlice.actions;
export const charactersReducer = charactersSlice.reducer;
