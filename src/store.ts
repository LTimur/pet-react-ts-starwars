import { configureStore } from "@reduxjs/toolkit";
import { charactersReducer } from "./features/CharactersSlice";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
  },
});
