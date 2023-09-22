import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCharacters } from './CharactersModel';
import { colors, fonts } from '../../variables';
import type { Character } from '../../entities/Character';
import { useFilter } from '../Filter/FilterModel';
import { Filter } from '../Filter/FilterUi';

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

const StyledCharacter = styled(Link)`
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

type CharacterListProps = {
  characters: Character[];
};

function CharactersList({ characters }: CharacterListProps) {
  const createLink = (url: string) => `/people/${url.split('people/')[1].split('/')[0]}`;
  return (
    <>
      {characters.map((element) => (
        <StyledCharacter key={element.url} to={createLink(element.url)}>
          {element.name}
        </StyledCharacter>
      ))}
    </>
  );
}

export function CharactersUi() {
  const [isLoading, characters] = useCharacters();
  const [filter, setFilter] = useState('');
  const charactersFiltered = useFilter<Character[]>(characters ?? [], filter);

  return (
    <ContainerWrapper>
      <Filter onChange={setFilter} />
      <CharactersList characters={charactersFiltered} />
    </ContainerWrapper>
  );
}
