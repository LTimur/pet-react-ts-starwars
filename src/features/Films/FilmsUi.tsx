import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFilms } from './FilmsModel';
import { colors, fonts } from '../../variables';
import type { Film } from '../../entities/Film';
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

const StyledFilm = styled(Link)`
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

type FilmListProps = {
  films: Film[];
};

function FilmsList({ films }:FilmListProps) {
  const createLink = (url: string) => `/films/${url.split('films/')[1].split('/')[0]}`;
  return (
    <>
      {films.map((element) => (
        <StyledFilm key={element.url} to={createLink(element.url)}>
          {element.title}
        </StyledFilm>
      ))}
    </>
  );
}

export function FilmsUi() {
  const [isLoading, films] = useFilms();
  const [filter, setFilter] = useState('');
  const filmsFiltered = useFilter<Film[]>(films ?? [], filter);

  return (
    <ContainerWrapper>
      <Filter onChange={setFilter} />
      <FilmsList
        films={filmsFiltered}
      />
    </ContainerWrapper>
  );
}
