import { configureStore } from "@reduxjs/toolkit";
import { charactersReducer } from "./features/CharactersSlice";
import { characterReducer } from "./features/CharacterSlice";
import { filmsReducer } from "./features/FilmsSlice";
import { filmReducer } from "./features/FilmSlice";
import { planetsReducer } from "./features/PlanetsSlice";
import { planetReducer } from "./features/PlanetSlice";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    character: characterReducer,
    films: filmsReducer,
    film: filmReducer,
    planets: planetsReducer,
    planet: planetReducer
  },
});
