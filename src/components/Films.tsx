import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useEffect } from 'react';
import { getFilms } from '../services/SwapiRequests';
import { setFilms } from '../features/FilmsSlice';

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

const Film = styled.p`
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

function FilmsList({ films, handleFilmClick }) {
  return (
    <>
      {films.map((element) => (
        <Film key={element.url} onClick={() => handleFilmClick(element)}>
          {element.title}
        </Film>
      ))}
    </>
  );
}

export function Films() {
  const films = useSelector((state) => state.films);
  const dispatch = useDispatch();
  useEffect(() => {
    getFilms().then((data) => {
      dispatch(setFilms(data.results));
    });
  }, [dispatch]);

  return (
    <ContainerWrapper>
      <FilmsList
        films={films}
        handleFilmClick={() => {
          console.log('ok');
        }}
      />
    </ContainerWrapper>
  );
}
