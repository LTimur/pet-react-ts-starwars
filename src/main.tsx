import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { PlanetsUi } from './features/Planets/PlanetsUi';
import { PlanetCard } from './features/Planet/PlanetUi';
import { FilmsUi } from './features/Films/FilmsUi';
import { FilmCard } from './features/Film/FilmUi';
import { CharactersUi } from './features/Characters/CharactersUi';
import { CharacterCard } from './features/Character/CharacterUi';
import { MainLayout } from './components/MainLayout';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/films" element={<FilmsUi />} />
          <Route path="/films/:id" element={<FilmCard />} />
          <Route path="/people" element={<CharactersUi />} />
          <Route path="/people/:id" element={<CharacterCard />} />
          <Route path="/planets" element={<PlanetsUi />} />
          <Route path="/planets/:id" element={<PlanetCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
