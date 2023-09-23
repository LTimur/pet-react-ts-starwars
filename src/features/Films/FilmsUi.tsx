import { useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Paper, NavLink, LoadingOverlay } from '@mantine/core';
import { useFilms } from './FilmsModel';
import type { Film } from '../../entities/Film';
import { useFilter } from '../Filter/FilterModel';
import { Filter } from '../Filter/FilterUi';

type FilmListProps = {
  films: Film[];
};

function FilmsList({ films }:FilmListProps) {
  const createLink = (url: string) => `/films/${url.split('films/')[1].split('/')[0]}`;
  return (
    <>
      {films.map((element) => (
        <NavLink
          key={element.url}
          label={element.title}
          component={RouterNavLink}
          to={createLink(element.url)}
        />
      ))}
    </>
  );
}

export function FilmsUi() {
  const [isLoading, films] = useFilms();
  const [filter, setFilter] = useState('');
  const filmsFiltered = useFilter<Film[]>(films ?? [], filter);

  return (
    <Paper shadow="xl" p="xl" pos="relative">
      <LoadingOverlay visible={isLoading} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
      <Filter onChange={setFilter} />
      <FilmsList
        films={filmsFiltered}
      />
    </Paper>
  );
}
