import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPlanets } from '../services/SwapiRequests';
import { setPlanets } from '../features/PlanetsSlice';
import { colors, fonts } from '../variables';

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

function PlanetList({ planets }) {
  return (
    <>
      {planets.map((element) => (
        <Planet key={element.url} to={`/planets/${element.url.split('planets/')[1].split('/')[0]}`}>
          {element.name}
        </Planet>
      ))}
    </>
  );
}

export function Planets() {
  const planets = useSelector((state) => state.planets);
  const dispatch = useDispatch();
  useEffect(() => {
    getPlanets().then((data) => {
      dispatch(setPlanets(data.results));
    });
  }, [dispatch]);

  return (
    <ContainerWrapper>
      <PlanetList
        planets={planets}
        handlePlanetClick={() => {
          console.log('ok');
        }}
      />
    </ContainerWrapper>
  );
}
