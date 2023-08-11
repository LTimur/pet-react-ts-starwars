import { configureStore } from "@reduxjs/toolkit";
import { charactersReducer } from "./features/CharactersSlice";
import { characterReducer } from "./features/CharacterSlice";
import { filmsReducer } from "./features/FilmsSlice";
import { planetsReducer } from "./features/PlanetsSlice";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    character: characterReducer,
    films: filmsReducer,
    planets: planetsReducer,
  },
});
