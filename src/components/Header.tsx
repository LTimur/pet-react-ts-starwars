import styled from "styled-components";
import logo from "../assets/logo.png";

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
  return (
    <div>
      <LogoContainer>
        <Logo src={logo} alt="Star Wars" />
      </LogoContainer>
      <Menu>
        <button>Films</button>
        <button>Planets</button>
        <button>People</button>
      </Menu>
      <Input/>
    </div>
  );
}