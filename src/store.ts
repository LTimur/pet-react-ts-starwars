import { configureStore } from '@reduxjs/toolkit';
import { charactersReducer } from './features/Characters/CharactersModel';
import { filmsReducer } from './features/Films/FilmsModel';
import { planetsReducer } from './features/Planets/PlanetsModel';
import { searchReducer } from './features/SearchSlice';

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    films: filmsReducer,
    planets: planetsReducer,
    query: searchReducer,
  },
});
