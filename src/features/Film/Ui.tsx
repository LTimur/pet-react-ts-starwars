import {
  Text, Paper, Title, Space, LoadingOverlay,
} from '@mantine/core';
import { useFilmData } from './Model';

export function FilmCard() {
  const { isLoading, error, data } = useFilmData();
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
      <Title order={2}>{data.title}</Title>
      <Space h="md" />
      <Text>{data.opening_crawl}</Text>
      <Space h="md" />
      <Text>
        <span style={{ fontWeight: 700 }}>Release date:</span>
        {' '}
        {data.release_date}
      </Text>
      <Text>
        <span style={{ fontWeight: 700 }}>Director:</span>
        {' '}
        {data.director}
      </Text>
      <Text>
        <span style={{ fontWeight: 700 }}>Producer:</span>
        {' '}
        {data.producer}
      </Text>
    </Paper>
  );
}
