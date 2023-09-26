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
  if (error || !data) {
    return (
      <Paper shadow="md" withBorder p="xl">
        <Text>Cannot show the info</Text>
      </Paper>
    );
  }

  return (
    <Paper shadow="md" withBorder p="xl">
      <Title order={2}>{data.name}</Title>
      <Space h="md" />
      <Text>
        <span style={{ fontWeight: 700 }}>Climate:</span>
        {' '}
        {data.climate}
      </Text>
      <Text>
        <span style={{ fontWeight: 700 }}>Terrain:</span>
        {' '}
        {data.terrain}
      </Text>
      <Text>
        <span style={{ fontWeight: 700 }}>Population:</span>
        {' '}
        {data.population}
      </Text>
      <Text>
        <span style={{ fontWeight: 700 }}>Diameter:</span>
        {' '}
        {data.diameter}
      </Text>
      <Text>
        <span style={{ fontWeight: 700 }}>Orbital period:</span>
        {' '}
        {data.orbital_period}
      </Text>
      <Text>
        <span style={{ fontWeight: 700 }}>Rotation period:</span>
        {' '}
        {data.rotation_period}
      </Text>
      <Text>
        <span style={{ fontWeight: 700 }}>Gravity:</span>
        {' '}
        {data.gravity}
      </Text>
      <Text>
        <span style={{ fontWeight: 700 }}>Surface water:</span>
        {' '}
        {data.surface_water}
      </Text>
    </Paper>
  );
}
