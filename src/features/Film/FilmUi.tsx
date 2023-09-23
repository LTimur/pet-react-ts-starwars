import styled from 'styled-components';
import {
  Text, Paper, Title, Space,
} from '@mantine/core';
import { colors, fonts } from '../../variables';
import { useFilmData } from './FilmModel';

const StyledFilm = styled.div`
  margin: 0 auto;
  width: 70%;
  color: ${colors.FontColor};
  background-color: ${colors.LightColor};
  padding: 10px;
  border-radius: 8px;
  font-size: ${fonts.PrimaryFontSize};
`;

export function FilmCard() {
  const { isLoading, error, data } = useFilmData();
  if (isLoading) {
    return (
      <StyledFilm>
        <p>Loading</p>
      </StyledFilm>
    );
  }
  if (error) {
    return (
      <StyledFilm>
        <div>{error}</div>
      </StyledFilm>
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
