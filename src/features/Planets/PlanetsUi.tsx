import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../shared/api';
import { colors, fonts } from '../../variables';
import type { Planet } from '../../entities/Planet';
import { setPlanets } from './PlanetsModel';

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
const Planet = styled(Link)`
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
        <Planet key={element.url} to={createLink(element.url)}>
        {element.name}
      </Planet>
      ))}
    </>
  );
}
const selectPlanetsByQuery = (state) => {
  const query = state.query.query.toLowerCase();
  return state.planets.filter((planet) => planet.name.toLowerCase().includes(query));
};

export function PlanetsUi() {
  const query = useSelector((state) => state.query);
  const planets = useSelector(selectPlanetsByQuery);

  const dispatch = useDispatch();
  useEffect(() => {
    void api.getPlanets().then((data) => {
      dispatch(setPlanets(data.results));
    });
  }, [dispatch]);

  return (
    <ContainerWrapper>
      <PlanetList
        planets={planets}
      />
    </ContainerWrapper>
  );
}
