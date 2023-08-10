import styled from "styled-components";
import logo from "../assets/logo.png";
import { getCharacters, getFilms, getPlanets } from "../services/SwapiRequests";

import { setCharacters } from "../features/CharactersSlice";
import { setFilms } from "../features/FilmsSlice";
import { setPlanets } from "../features/PlanetsSlice";

import { useDispatch } from "react-redux";

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  button {
    margin: 0 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    background-color: #000;
    color: #fff;
  }
`;

const Input = styled.input`
  display: block;
  width: 70%;
  margin: 10px auto;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;

  &:focus {
    border: 2px solid black;
  }
`;

export function Header() {
  const dispatch = useDispatch();

  const handleCharactersClick = () => {
    getCharacters().then((data) => {
      dispatch(setCharacters(data.results));
    });
  };

  const handleFilmsClick = () => {
    getFilms().then((data) => {
      dispatch(setFilms(data.results));
    });
  };

  const handlePlanetsClick = () => {
    getPlanets().then((data) => {
      dispatch(setPlanets(data.results));
    });
  };

  return (
    <div>
      <LogoContainer>
        <Logo src={logo} alt="Star Wars" />
      </LogoContainer>
      <Menu>
        <button onClick={handleCharactersClick}>People</button>
        <button onClick={handleFilmsClick}>Films</button>
        <button onClick={handlePlanetsClick}>Planets</button>
      </Menu>
      <Input />
    </div>
  );
}
