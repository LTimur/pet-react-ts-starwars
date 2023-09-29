import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { PlanetsUi } from '../features/Planets/Ui';
import { PlanetCard } from '../features/Planet/Ui';
import { FilmsUi } from '../features/Films/Ui';
import { FilmCard } from '../features/Film/Ui';
import { CharactersUi } from '../features/Characters/Ui';
import { CharacterCard } from '../features/Character/Ui';
import { MainLayout } from '../components/MainLayout';
import { PATH_PAGE } from '../shared/lib/react-router/Paths';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH_PAGE.mainLayout} element={<MainLayout />}>
          <Route path={PATH_PAGE.films} element={<FilmsUi />} />
          <Route path={PATH_PAGE.filmCard} element={<FilmCard />} />
          <Route path={PATH_PAGE.characters} element={<CharactersUi />} />
          <Route path={PATH_PAGE.characterCard} element={<CharacterCard />} />
          <Route path={PATH_PAGE.planets} element={<PlanetsUi />} />
          <Route path={PATH_PAGE.planetCard} element={<PlanetCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
