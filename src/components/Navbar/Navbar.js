import { useState } from "react";
import {
  BurgerMenu,
  Container,
  Logo,
  NavButton,
  NavLink,
  NavLinks,
  NavLinksWrapper,
} from "./Navbar.styled";
import LogoSrc from "../../images/logo.svg";
import Close from "../../images/icon-close.svg";
import Hamburger from "../../images/icon-hamburger.svg";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  return (
    <Container>
      <Logo src={LogoSrc} alt="Easy Banking Logo" />
      <BurgerMenu
        src={navActive ? Close : Hamburger}
        alt="Burger Menu"
        onClick={() => setNavActive(!navActive)}
      />
      <NavLinksWrapper navActive={navActive}>
        <NavLinks navActive={navActive}>
          <NavLink>
            <a href="#home">Home</a>
          </NavLink>
          <NavLink>
            <a href="#about">About</a>
          </NavLink>
          <NavLink>
            <a href="#contacts">Contact</a>
          </NavLink>
          <NavLink>
            <a href="#blog">Blog</a>
          </NavLink>
          <NavLink>
            <a href="#careers">Careers</a>
          </NavLink>
        </NavLinks>
      </NavLinksWrapper>
      <NavButton>Request Invite</NavButton>
    </Container>
  );
};

export default Navbar;
