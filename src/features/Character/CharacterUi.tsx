import styled from 'styled-components';
import {
  Text, Paper, Title,
} from '@mantine/core';
import { colors, fonts } from '../../variables';
import { useCharacterData } from './CharacterModel';

const StyledCharacter = styled.div`
  margin: 0 auto;
  width: 70%;
  color: ${colors.FontColor};
  background-color: ${colors.LightColor};
  padding: 10px;
  border-radius: 8px;
  font-size: ${fonts.PrimaryFontSize};
`;

export function CharacterCard() {
  const { isLoading, error, data } = useCharacterData();
  if (isLoading) {
    return (
      <StyledCharacter>
        <div>Loading</div>
      </StyledCharacter>
    );
  }
  if (error) {
    return (
      <StyledCharacter>
        <div>{error}</div>
      </StyledCharacter>
    );
  }

  return (
      <Paper shadow="md" withBorder p="xl" >
        <Title order={2}>{data.name}</Title>
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
