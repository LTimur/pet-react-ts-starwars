import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCharacters } from "../features/CharactersSlice";
import styled from "styled-components";
import { getCharacters } from "../services/SwapiRequests";

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
  const characters = useSelector((state) => state.characters);
  const dispatch = useDispatch();
  console.log(characters);

  useEffect(() => {
    getCharacters().then((data) => {
      dispatch({
        type: "characters/setCharacters",
        payload: data.results,
      });
    });
  }, []);

  return (
    <ContainerWrapper>
      {characters.map((character) => (
        <Person key={character.url}>{character.name}</Person>
      ))}
    </ContainerWrapper>
  );
}