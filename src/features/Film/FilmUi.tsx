import {
  Text, Paper, Title, Space, LoadingOverlay,
} from '@mantine/core';
import { useFilmData } from './FilmModel';

export function FilmCard() {
  const { isLoading, error, data } = useFilmData();
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
      <Title order={2}>{data.title}</Title>
      <Space h="md" />
      <Text>{data.opening_crawl}</Text>
      <Space h="md" />
      <Text date fw={700}>
        Release date:
        <Text component="date">
          {' '}
          {data.release_date}
        </Text>
      </Text>
      <Text director fw={700}>
        Director:
        <Text component="director">
          {' '}
          {data.director}
        </Text>
      </Text>
      <Text producer fw={700}>
        Producer:
        <Text component="producer">
          {' '}
          {data.producer}
        </Text>
      </Text>
    </Paper>
  );
}
