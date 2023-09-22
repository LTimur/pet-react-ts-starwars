import styled from 'styled-components';
import { Text, Paper, Title } from '@mantine/core';
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
    <Paper shadow="md" withBorder p="xl">
      <Title order={2}>{data.name}</Title>
      <Text>{data.opening_crawl}</Text>
      <Text climate fw={700}>
        {' '}
        Climate:
        <Text component="climate">
          {' '}
          {data.climate}
          {' '}
        </Text>
      </Text>
      <Text terrain fw={700}>
        Terrain:
        <Text component="terrain">
          {' '}
          {data.terrain}
        </Text>
      </Text>
      <Text population fw={700}>
        Population:
        <Text component="population">
          {' '}
          {data.population}
        </Text>
      </Text>
      <Text diameter fw={700}>
        Diameter:
        <Text component="diameter">
          {' '}
          {data.diameter}
        </Text>
      </Text>
      <Text orbital_period fw={700}>
        Orbital period:
        <Text component="orbital_period">
          {' '}
          {data.orbital_period}
        </Text>
      </Text>
      <Text rotation_period fw={700}>
        Rotation period:
        <Text component="rotation_period">
          {' '}
          {data.rotation_period}
        </Text>
      </Text>
      <Text gravity fw={700}>
        Gravity:
        <Text component="gravity">
          {' '}
          {data.gravity}
        </Text>
      </Text>
      <Text surface_water fw={700}>
        Surface water:
        <Text component="surface_water">
          {' '}
          {data.surface_water}
        </Text>
      </Text>
    </Paper>
  );
}
