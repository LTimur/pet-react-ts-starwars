import { configureStore } from "@reduxjs/toolkit";
import { charactersReducer } from "./features/CharactersSlice";
import { filmsReducer } from "./features/FilmsSlice";
import { planetsReducer } from "./features/PlanetsSlice";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    films: filmsReducer,
    planets: planetsReducer,
  },
});
