import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { colors, fonts } from '../variables';

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
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  margin: 0 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: ${fonts.SecondaryFontSize};
  cursor: pointer;
  background-color: ${colors.FontColor};
  color:${colors.LightColor};

  &:hover {
    color: ${colors.LightAccentColor};
  }

  &.active-link {
    background-color: ${colors.DarkAccentColor};
    color: ${colors.LightColor};
  }
`;

const Input = styled.input`
  display: block;
  width: 70%;
  margin: 10px auto;
  padding: 10px;
  border-radius: 5px;
  font-size: ${fonts.SecondaryFontSize};
  outline: none;

  &:focus {
    border: 2px solid ${colors.FontColor};
  }
`;

const setActive = ({isActive}) => (isActive ? 'active-link' : '');

export function Header() {
  return (
    <div>
      <LogoContainer>
        <Logo src={logo} alt="Star Wars" />
      </LogoContainer>
      <Menu>
        <StyledLink className={setActive} to="/films">Films</StyledLink>
        <StyledLink className={setActive} to="/planets">Planets</StyledLink>
        <StyledLink className={setActive} to="/characters">Characters</StyledLink>
      </Menu>
      <Input />
    </div>
  );
}
