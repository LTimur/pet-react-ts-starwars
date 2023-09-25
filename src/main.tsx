import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { PlanetsUi } from './features/Planets/Ui';
import { PlanetCard } from './features/Planet/Ui';
import { FilmsUi } from './features/Films/Ui';
import { FilmCard } from './features/Film/Ui';
import { CharactersUi } from './features/Characters/Ui';
import { CharacterCard } from './features/Character/Ui';
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
