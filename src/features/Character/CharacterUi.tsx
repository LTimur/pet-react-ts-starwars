import styled from 'styled-components';
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
        <p>Loading</p>
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
    <StyledCharacter>
      <h2>{data.name}</h2>
      <p>
        Gender:
        {data.gender}
      </p>
      <p>
        Birth year:
        {data.birth_year}
      </p>
      <p>
        Height:
        {data.height}
      </p>
      <p>
        Mass:
        {data.mass}
      </p>
      <p>
        Hair color:
        {data.hair_color}
      </p>
      <p>
        Skin color:
        {data.skin_color}
      </p>
      <p>
        Skin color:
        {data.eye_color}
      </p>
    </StyledCharacter>
  );
}
