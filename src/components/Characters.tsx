import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../shared/api';
import { setCharacters } from '../features/CharactersSlice';
import { colors, fonts } from '../variables';

const ContainerWrapper = styled.div`
  margin: 0 auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${colors.FontColor};
  color: ${colors.DarkBackgroundColor};
  padding: 20px;
  border-radius: 8px;
`;

const Character = styled(Link)`
  margin: 0 auto;
  width: 70%;
  color: ${colors.FontColor};
  background-color: ${colors.LightColor};
  padding: 10px;
  border-radius: 8px;
  font-weight: bold;
  font-size: ${fonts.PrimaryFontSize};
  text-align: center;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    background-color: ${colors.LightAccentColor};
  }
`;

function CharactersList({ characters, handleCharacterClick }) {
  return (
    <>
      {characters.map((element) => (
        <Character key={element.url} to={`/characters/${element.url.split('people/')[1].split('/')[0]}`}>
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
    void api.getCharacters().then((data) => {
      dispatch(setCharacters(data.results));
    });
  }, [dispatch]);

  return (
    <ContainerWrapper>
      <CharactersList
        characters={characters}
        handleCharacterClick={() => {
          dispatch(setCharacters(character));
        }}
      />
    </ContainerWrapper>
  );
}
