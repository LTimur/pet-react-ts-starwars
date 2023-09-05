import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Planets } from './components/Planets.tsx';
import { Films } from './components/Films.tsx';
import { FilmCard } from './components/FilmCard.tsx';
import { Characters } from './components/Characters.tsx';
import { MainLayout } from './components/MainLayout.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/films" element={<Films />} />
          <Route path="/films/:id" element={<FilmCard />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/planets" element={<Planets />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
