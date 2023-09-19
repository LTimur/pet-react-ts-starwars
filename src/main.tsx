import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Planets } from './components/Planets.tsx';
import { PlanetCard } from './features/Planet/PlanetUi.tsx';
import { Films } from './components/Films.tsx';
import { FilmCard } from './features/Film/FilmUi.tsx';
import { Characters } from './components/Characters.tsx';
import { CharacterCard } from './features/Character/CharacterUi.tsx';
import { MainLayout } from './components/MainLayout.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/films" element={<Films />} />
          <Route path="/films/:id" element={<FilmCard />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<CharacterCard />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/planets/:id" element={<PlanetCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
