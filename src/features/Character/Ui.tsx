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
      <Text gender fw={700}>
        {' '}
        Gender:
        <Text component="gender">
          {' '}
          {data.gender}
          {' '}
        </Text>
      </Text>
      <Text birth_year fw={700}>
        Birth year:
        <Text component="birth_year">
          {' '}
          {data.birth_year}
        </Text>
      </Text>
      <Text height fw={700}>
        Height:
        <Text component="height">
          {' '}
          {data.height}
        </Text>
      </Text>
      <Text mass fw={700}>
        Mass:
        <Text component="mass">
          {' '}
          {data.mass}
        </Text>
      </Text>
      <Text hair_color fw={700}>
        Hair color:
        <Text component="hair_color">
          {' '}
          {data.hair_color}
        </Text>
      </Text>
      <Text skin_color fw={700}>
        Skin color:
        <Text component="skin_color">
          {' '}
          {data.skin_color}
        </Text>
      </Text>
      <Text eye_color fw={700}>
        Eye color:
        <Text component="eye_color">
          {' '}
          {data.eye_color}
        </Text>
      </Text>
    </Paper>
  );
}
