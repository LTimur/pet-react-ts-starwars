import {Container} from "../components/Container";
import {Header} from "../components/Header";
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

const HomeContainer = styled.div`
  background-color: white;
`;

export function Home() {
  return (
    <HomeContainer>
      <Header></Header>
      <Container />
    </HomeContainer>
  );
}
