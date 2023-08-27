import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useEffect } from 'react';
import { getPlanets } from '../services/SwapiRequests';
import { setPlanets } from '../features/PlanetsSlice';
import { colors, fonts } from '../variables';

const ContainerWrapper = styled.div`
  margin: 0 auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #000;
  color: #fff;
  padding: 20px;
  border-radius: 8px;
`;

const Planet = styled.p`
  margin: 0 auto;
  width: 70%;
  color: #000;
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 18px;
  text-align: center;

  &:hover {
    cursor: pointer;
    background-color: ${colors.LightAccentColor};
  }
`;

function PlanetList({ planets, handleCharacterClick }) {
  return (
    <>
      {planets.map((element) => (
        <Planet key={element.url} onClick={() => handlePlanetClick(element)}>
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
