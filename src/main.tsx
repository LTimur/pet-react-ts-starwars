import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App.tsx';

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
    <App />
  </React.StrictMode>,
);
