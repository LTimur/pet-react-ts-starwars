import styled from "styled-components";

const Character = styled.div`
  margin: 0 auto;
  width: 70%;
  color: #000;
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 18px;
`;

export function CharacterCard({character}) {
  return (
  <Character>
    <h2>{character.name}</h2>
    <p>{character.name}</p>
    <p>{character.height}</p>
    <p>{character.mass}</p>
    <p>{character.hair_color}</p>
    <p>{character.skin_color}</p>
    <p>{character.eye_color}</p>
    <p>{character.birth_year}</p>
    <p>{character.gender}</p>
    <p>{character.homeworld}</p>
  </Character>);
}
