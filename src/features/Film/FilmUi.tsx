import styled from 'styled-components';
import { colors, fonts } from '../../variables';
import { useFilmData } from './FilmModel';

const StyledFilm = styled.div`
  margin: 0 auto;
  width: 70%;
  color: ${colors.FontColor};
  background-color: ${colors.LightColor};
  padding: 10px;
  border-radius: 8px;
  font-size: ${fonts.PrimaryFontSize};
`;

export function FilmCard() {
  const { isLoading, error, data } = useFilmData();
  if (isLoading) {
    return (
      <StyledFilm>
        <p>Loading</p>
      </StyledFilm>
    );
  }
  if (error) {
    return (
      <StyledFilm>
        <div>{error}</div>
      </StyledFilm>
    );
  }

  return (
    <StyledFilm>
      <h2>{data.title}</h2>
      <p>{data.opening_crawl}</p>
      <p>
        Release date: {data.release_date}
      </p>
      <p>
        Director: {data.director}
      </p>
      <p>
        Producer: {data.producer}
      </p>
    </StyledFilm>
  );
}
