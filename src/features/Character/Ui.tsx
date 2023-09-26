import {
  Text, Paper, Title, Space, LoadingOverlay,
} from '@mantine/core';
import { useCharacterData } from './Model';

export function CharacterCard() {
  const { isLoading, error, data } = useCharacterData();
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
        <span style={{ fontWeight: 700 }}>Gender:</span>
        {' '}
        {data.gender}
      </Text>
      <Text>
        <span style={{ fontWeight: 700 }}>Birth year:</span>
        {' '}
        {data.birth_year}
      </Text>
      <Text>
        <span style={{ fontWeight: 700 }}>Height:</span>
        {' '}
        {data.height}
      </Text>
      <Text>
        <span style={{ fontWeight: 700 }}>Mass:</span>
        {' '}
        {data.mass}
      </Text>
      <Text>
        <span style={{ fontWeight: 700 }}>Hair color:</span>
        {' '}
        {data.hair_color}
      </Text>
      <Text>
        <span style={{ fontWeight: 700 }}>Skin color:</span>
        {' '}
        {data.skin_color}
      </Text>
      <Text>
        <span style={{ fontWeight: 700 }}>Eye color:</span>
        {' '}
        {data.eye_color}
      </Text>
    </Paper>
  );
}
