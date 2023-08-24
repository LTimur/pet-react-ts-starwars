import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useEffect } from 'react';
import { getCharacters } from '../services/SwapiRequests';
import { setCharacters } from '../features/CharactersSlice';

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

const Character = styled.p`
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

function CharactersList({ characters, handleCharacterClick }) {
  return (
    <>
      {characters.map((element) => (
        <Character key={element.url} onClick={() => handleCharacterClick(element)}>
          {element.name}
        </Character>
      ))}
    </>
  );
}

export function Characters() {
  const characters = useSelector((state) => state.characters);
  const dispatch = useDispatch();
  useEffect(() => {
    getCharacters().then((data) => {
      dispatch(setCharacters(data.results));
    });
  }, [dispatch]);

  return (
    <ContainerWrapper>
      <CharactersList
        characters={characters}
        handleCharacterClick={() => {
          console.log('ok');
        }}
      />
    </ContainerWrapper>
  );
}
