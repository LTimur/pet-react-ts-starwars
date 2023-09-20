import styled from 'styled-components';
import { colors, fonts } from '../../variables';
import { usePlanetData } from './PlanetModel';

const StyledPlanet = styled.div`
  margin: 0 auto;
  width: 70%;
  color: ${colors.FontColor};
  background-color: ${colors.LightColor};
  padding: 10px;
  border-radius: 8px;
  font-size: ${fonts.PrimaryFontSize};
`;

export function PlanetCard() {
  const { isLoading, error, data } = usePlanetData();
  if (isLoading) {
    return (
      <StyledPlanet>
        <p>Loading</p>
      </StyledPlanet>
    );
  }
  if (error) {
    return (
      <StyledPlanet>
        <div>{error}</div>
      </StyledPlanet>
    );
  }

  return (
    <StyledPlanet>
      <h2>{data.name}</h2>
      <p>
        Climate: {data.climate}
      </p>
      <p>
        Terrain: {data.terrain}
      </p>
      <p>
        Population: {data.population}
      </p>
      <p>
        Diameter: {data.diameter}
      </p>
      <p>
        Orbital period: {data.orbital_period}
      </p>
      <p>
        Rotation period: {data.rotation_period}
      </p>
      <p>
        Gravity: {data.gravity}
      </p>
      <p>
        Surface water: {data.surface_water}
      </p>
    </StyledPlanet>
  );
}
