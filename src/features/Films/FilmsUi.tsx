import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../shared/api';
import { setFilms } from './FilmsModel';
import { colors, fonts } from '../../variables';
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

const Film = styled(Link)`
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

function FilmsList({ films }) {
  const createLink = (url: string) => `/films/${url.split('films/')[1].split('/')[0]}`;
  return (
    <>
      {films.map((element) => (
        <Film key={element.url} to={createLink(element.url)}>
          {element.title}
        </Film>
      ))}
    </>
  );
}

export function FilmsUi() {
  const films = useSelector((state) => state.films);
  const dispatch = useDispatch();
  useEffect(() => {
    void api.getFilms().then((data) => {
      dispatch(setFilms(data.results));
    });
  }, [dispatch]);

  return (
    <ContainerWrapper>
      <Filter />
      <FilmsList
        films={films}
      />
    </ContainerWrapper>
  );
}
