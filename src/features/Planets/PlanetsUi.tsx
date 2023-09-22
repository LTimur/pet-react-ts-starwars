import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePlanets } from './PlanetsModel';
import { colors, fonts } from '../../variables';
import type { Planet } from '../../entities/Planet';
import { useFilter } from '../Filter/FilterModel';
import { Filter } from '../Filter/FilterUi';

const ContainerWrapper = styled.div`
  margin: 0 auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${colors.FontColor};
  color: ${colors.DarkBackgroundColor};
  padding: 20px;
  border-radius: 8px;
`;
const StyledPlanet = styled(Link)`
  margin: 0 auto;
  width: 70%;
  color: ${colors.FontColor};
  background-color: ${colors.LightColor};
  padding: 10px;
  border-radius: 8px;
  font-weight: bold;
  font-size: ${fonts.PrimaryFontSize};
  text-align: center;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    background-color: ${colors.LightAccentColor};
  }
`;

type PlanetListProps = {
  planets: Planet[];
};

function PlanetList({ planets }:PlanetListProps) {
  const createLink = (url: string) => `/planets/${url.split('planets/')[1].split('/')[0]}`;
  return (
    <>
      {planets.map((element) => (
        <StyledPlanet key={element.url} to={createLink(element.url)}>
          {element.name}
        </StyledPlanet>
      ))}
    </>
  );
}

export function PlanetsUi() {
  const [isLoading, planets] = usePlanets();
  const [filter, setFilter] = useState('');
  const planetsFiltered = useFilter<Planet[]>(planets ?? [], filter);

  return (
    <ContainerWrapper>
      <Filter onChange={setFilter} />
      <PlanetList
        planets={planetsFiltered}
      />
    </ContainerWrapper>
  );
}
