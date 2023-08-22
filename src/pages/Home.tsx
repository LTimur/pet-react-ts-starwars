import styled from 'styled-components';
import { Container } from '../components/Container';
import { Header } from '../components/Header';

const HomeWrapper = styled.div`
  background-color: white;
`;

export function Home() {
  return (
    <HomeWrapper>
      <Header />
      <Container />
    </HomeWrapper>
  );
}
