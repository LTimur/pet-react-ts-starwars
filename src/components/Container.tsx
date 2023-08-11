import { useSelector } from "react-redux";
import styled from "styled-components";
import { CharacterCard } from "./CharacterCard";
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

export function Container() {
  const planets = useSelector((state) => state.planets);
  const films = useSelector((state) => state.films);
  const characters = useSelector((state) => state.characters);

  let renderContent;

  if (planets.length > 0) {
    renderContent = planets.map((element) => (
      <Person key={element.url}>{element.name}</Person>
    ));
  } else if (films.length > 0) {
    renderContent = films.map((element) => (
      <Person key={element.url}>{element.title}</Person>
    ));
  } else if (characters.length > 0) {
    renderContent = characters.map((element) => (
      <Person key={element.url}>{element.name}</Person>
    ));
  } else {
    renderContent = <p>Let's explore the universe of Star Wars!</p>;
  }

  return <ContainerWrapper>{renderContent}</ContainerWrapper>;
}
