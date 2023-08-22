import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { CharacterCard } from './CharacterCard';
import { setCharacter } from '../features/CharacterSlice';

const ContainerWrapper = styled.div`
  margin: 0 auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #000;
  color: #fff;
  padding: 20px;
  border-radius: 8px;
`;

const Person = styled.p`
  margin: 0 auto;
  width: 70%;
  color: #000;
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
`;

function PlanetList({ planets, handleCharacterClick }) {
  return (
    <>
      {planets.map((element) => (
        <Person key={element.url} onClick={() => handleCharacterClick(element)}>
          {element.name}
        </Person>
      ))}
    </>
  );
}

function FilmList({ films, handleCharacterClick }) {
  return (
    <>
      {films.map((element) => (
        <Person key={element.url} onClick={() => handleCharacterClick(element)}>
          {element.title}
        </Person>
      ))}
    </>
  );
}

function CharacterList({ characters, handleCharacterClick }) {
  return (
    <>
      {characters.map((element) => (
        <Person key={element.url} onClick={() => handleCharacterClick(element)}>
          {element.name}
        </Person>
      ))}
    </>
  );
}

export function Container() {
  const planets = useSelector((state) => state.planets);
  const films = useSelector((state) => state.films);
  const characters = useSelector((state) => state.characters);
  const selectedCharacter = useSelector((state) => state.character);
  console.log(planets);
  console.log(films);
  console.log(characters);
  console.log(selectedCharacter);
  const dispatch = useDispatch();

  const handleCharacterClick = (character) => {
    dispatch(setCharacter(character));
  };

  let content;
  if (Object.prototype.hasOwnProperty.call(selectedCharacter, 'name')) {
    content = <CharacterCard character={selectedCharacter} />;
  } else if (planets.length > 0) {
    content = <PlanetList planets={planets} handleCharacterClick={handleCharacterClick} />;
  } else if (films.length > 0) {
    content = <FilmList films={films} handleCharacterClick={handleCharacterClick} />;
  } else if (characters.length > 0) {
    content = <CharacterList characters={characters} handleCharacterClick={handleCharacterClick} />;
  } else {
    content = "Let's explore the Star Wars universe!";
  }

  return (
    <ContainerWrapper>
      {content}
    </ContainerWrapper>
  );
}
