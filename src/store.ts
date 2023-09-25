import { configureStore } from '@reduxjs/toolkit';
import { charactersReducer } from './features/Characters/Model';
import { filmsReducer } from './features/Films/Model';
import { planetsReducer } from './features/Planets/Model';

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    films: filmsReducer,
    planets: planetsReducer,
  },
});
