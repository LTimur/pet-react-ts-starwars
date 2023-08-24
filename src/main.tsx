import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Planets } from './components/Planets.tsx';
import { Films } from './components/Films.tsx';
import { Characters } from './components/Characters.tsx';
import { PlanetCard } from './components/PlanetCard.tsx';
import { FilmCard } from './components/FilmCard.tsx';
import { CharacterCard } from './components/CharacterCard.tsx';
import { MainLayout } from './components/MainLayout.tsx';

const router = createBrowserRouter([
  {
    path: '/films',
    element: <Films />,
  },
  {
    path: '/films/:filmId',
    element: <FilmCard />,
  },
  {
    path: '/planets',
    element: <Planets />,
  },
  {
    path: '/planets/:planetId',
    element: <PlanetCard />,
  },
  {
    path: '/characters',
    element: <Characters />,
  },
  {
    path: '/characters/:characterId',
    element: <CharacterCard />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainLayout>
      <RouterProvider router={router} />
    </MainLayout>
  </React.StrictMode>,
);
