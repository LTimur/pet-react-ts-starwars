import styled from "styled-components";

const Film = styled.div`
  margin: 0 auto;
  width: 70%;
  color: #000;
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  font-size: 18px;
`;

export function FilmCard({film}) {
  return (
  <Film>
    <h2>{film.title}</h2>
    <p>{film.opening_crawl}</p>
    <p>Release date: {film.release_date}</p>
    <p>Director: {film.director}</p>
    <p>Producer: {film.producer}</p>
    <p>Hair color: {film.hair_color}</p>
    <p>Skin color: {film.skin_color}</p>
    <p>Skin color: {film.eye_color}</p>
  </Film>);
}