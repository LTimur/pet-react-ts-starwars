import styled from 'styled-components';
import { colors, fonts } from '../variables';

const Character = styled.div`
  margin: 0 auto;
  width: 70%;
  color: ${colors.FontColor};
  background-color: ${colors.LightColor};
  padding: 10px;
  border-radius: 8px;
  font-size: ${fonts.PrimaryFontSize};
`;

export function CharacterCard({ character }) {
  return (
    <Character>
      <h2>{character.name}</h2>
      <p>
        Gender:
        {character.gender}
      </p>
      <p>
        Birth year:
        {character.birth_year}
      </p>
      <p>
        Height:
        {character.height}
      </p>
      <p>
        Mass:
        {character.mass}
      </p>
      <p>
        Hair color:
        {character.hair_color}
      </p>
      <p>
        Skin color:
        {character.skin_color}
      </p>
      <p>
        Skin color:
        {character.eye_color}
      </p>
    </Character>
  );
}
