import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { PlanetsUi } from './features/Planets/PlanetsUi.tsx';
import { PlanetCard } from './features/Planet/PlanetUi.tsx';
import { FilmsUi } from './features/Films/FilmsUi.tsx';
import { FilmCard } from './features/Film/FilmUi.tsx';
import { CharactersUi } from './features/Characters/CharactersUi.tsx';
import { CharacterCard } from './features/Character/CharacterUi.tsx';
import { MainLayout } from './components/MainLayout.tsx';

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
