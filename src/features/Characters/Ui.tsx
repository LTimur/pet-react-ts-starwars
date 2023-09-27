import { useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Paper, NavLink, LoadingOverlay } from '@mantine/core';
import { useCharacters } from './Model';
import type { Character } from '../../entities/Character';
import { useFilter } from '../Filter/FilterModel';
import { Filter } from '../Filter/FilterUi';

type CharacterListProps = {
  characters: Character[];
};

function CharactersList({ characters }: CharacterListProps) {
  const createLink = (url: string) => `/people/${url.split('people/')[1].split('/')[0]}`;
  return (
    <>
      {characters.map((element) => (
        <NavLink
          key={element.url}
          label={element.name}
          component={RouterNavLink}
          to={createLink(element.url)}
        />
      ))}
    </>
  );
}

export function CharactersUi() {
  const [isLoading, characters] = useCharacters();
  const [filter, setFilter] = useState('');
  const charactersFiltered = useFilter<Character[]>(characters ?? [], filter);

  return (
    <Paper shadow="xl" p="xl">
      <Filter onChange={setFilter} />
      <LoadingOverlay visible={isLoading} zIndex={1000} overlayProps={{ radius: 'sm', blur: 2 }} />
      <CharactersList characters={charactersFiltered} />
    </Paper>
  );
}
