import { useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom'; 
import { Paper, NavLink, LoadingOverlay } from '@mantine/core';
 import { usePlanets } from './PlanetsModel';
import type { Planet } from '../../entities/Planet';
import { useFilter } from '../Filter/FilterModel';
import { Filter } from '../Filter/FilterUi';

type PlanetListProps = {
  planets: Planet[];
};

function PlanetList({ planets }:PlanetListProps) {
  const createLink = (url: string) => `/planets/${url.split('planets/')[1].split('/')[0]}`;
  return (
    <>
      {planets.map((element) => (
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

export function PlanetsUi() {
  const [isLoading, planets] = usePlanets();
  const [filter, setFilter] = useState('');
  const planetsFiltered = useFilter<Planet[]>(planets ?? [], filter);

  return (
    <Paper shadow="xl" p="xl">
      <LoadingOverlay visible={isLoading} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
      <Filter onChange={setFilter} />
      <PlanetList
        planets={planetsFiltered}
      />
    </Paper>
  );
}
