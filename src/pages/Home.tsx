import {Container} from "../components/Container";
import {Header} from "../components/Header";
import styled from "styled-components";

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
