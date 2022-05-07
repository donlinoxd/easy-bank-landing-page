import styled from "styled-components";
import { Button } from "../styled/Button";

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.neutral.white};
  padding: 1.2rem 1.4rem;
  z-index: 10;

  @media (${({ theme }) => theme.screen.lg}) {
    padding: 0 10%;
  }
`;

const Logo = styled.img``;

const BurgerMenu = styled.img`
  cursor: pointer;
  @media (${({ theme }) => theme.screen.lg}) {
    display: none;
  }
`;

const NavLinksWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
  width: 100%;
  height: 100vh;
  transition: all 0.3s linear;
  background: ${({ navActive }) =>
    navActive && "linear-gradient(to bottom, rgba(0,0,0,0.75), transparent )"};

  @media (${({ theme }) => theme.screen.lg}) {
    position: relative;
    background: none;
    transition: none;
    transform: none;
    height: 100%;
    padding-top: 0;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  border-radius: 5px;
  width: 85%;
  max-width: 400px;
  background: ${({ theme }) => theme.colors.neutral.white};
  margin: 1.4rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1.4rem;
  transition: all 0.3s ease-in-out;
  ${({ navActive }) => !navActive && "transform: translateY(-150%)"};

  @media (${({ theme }) => theme.screen.lg}) {
    flex-direction: row;
    transform: none;
    width: 100%;
    max-width: none;
    height: 100%;
    background: none;
    margin: 0;
    padding: 0;
  }
`;

const NavLink = styled.li`
  margin: 0.8rem;
  position: relative;
  height: 100%;
  padding: 1.7rem 1.4rem;
  border-bottom: 5px solid transparent;
  overflow: hidden;
  cursor: pointer;
  &::after {
    content: '';
          position: absolute;
          bottom: 0;
          left: -100%;
          height: 5px;
          width: 100%;
          background: ${({ theme }) =>
            `linear-gradient(to right, ${theme.colors.primary.green}, ${theme.colors.primary.cyan})`};      
          transition: all 0.1s linear;
  }
  &:hover{
      &::after {
          z-index: 100;
          transform: translateX(100%);
        }
    }
  }
  a {
    color: ${({ theme }) => theme.colors.primary.blue};
    text-decoration: none;
  }

  @media (${({ theme }) => theme.screen.lg}) {
    margin: 0 0.8rem;
  }
`;

const NavButton = styled(Button)`
  display: none;

  @media (${({ theme }) => theme.screen.lg}) {
    display: block;
    width: 215px;
  }
`;

export {
  Container,
  Logo,
  BurgerMenu,
  NavLinksWrapper,
  NavLinks,
  NavLink,
  NavButton,
};
