import {
  Text, Paper, Title, Space, LoadingOverlay,
} from '@mantine/core';
import { usePlanetData } from './Model';

export function PlanetCard() {
  const { isLoading, error, data } = usePlanetData();
  if (isLoading) {
    return (
      <Paper shadow="md" withBorder p="xl">
        <LoadingOverlay visible={isLoading} zIndex={1000} overlayProps={{ radius: 'sm', blur: 2 }} />
      </Paper>
    );
  }
  if (error) {
    return (
      <Paper shadow="md" withBorder p="xl">
        {error}
      </Paper>
    );
  }

  return (
    <Paper shadow="md" withBorder p="xl">
      <Title order={2}>{data.name}</Title>
      <Space h="md" />
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
