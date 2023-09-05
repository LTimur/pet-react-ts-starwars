import styled from 'styled-components';
import { colors, fonts } from '../variables';
import { useParams } from 'react-router-dom';

const Film = styled.div`
  margin: 0 auto;
  width: 70%;
  color: ${colors.FontColor};
  background-color: ${colors.LightColor};
  padding: 10px;
  border-radius: 8px;
  font-size: ${fonts.PrimaryFontSize};
`;

export function FilmCard() {
  const {id} = useParams()
  return (
    <Film>
      {id}
      {/* <h2>{film.title}</h2>
      <p>{film.opening_crawl}</p>
      <p>
        Release date:
        {film.release_date}
      </p>
      <p>
        Director:
        {film.director}
      </p>
      <p>
        Producer:
        {film.producer}
      </p>
      <p>
        Hair color:
        {film.hair_color}
      </p>
      <p>
        Skin color:
        {film.skin_color}
      </p>
      <p>
        Skin color:
        {film.eye_color}
      </p> */}
    </Film>
  );
}
