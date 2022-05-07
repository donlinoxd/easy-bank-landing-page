import styled from "styled-components";

const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary.blue};
  color: ${({ theme }) => theme.colors.neutral.veryLightGray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;

  @media (${({ theme }) => theme.screen.md}) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 10%;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 65%;
  max-width: 240px;

  @media (${({ theme }) => theme.screen.md}) {
    align-items: ${({ left }) => (left ? "start" : "flex-end")};
  }
`;
const LinksWrapper = styled.ul`
  list-style: none;
  margin: 1.5rem 0;

  @media (${({ theme }) => theme.screen.md}) {
    height: 150px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 45%;
    align-items: start;
  }
`;
const Logo = styled.img`
  width: 75%;
`;

const Socials = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media (${({ theme }) => theme.screen.md}) {
    width: 80%;
    margin-top: 2.5rem;
  }
`;
const Social = styled.img``;

const Copyright = styled.span`
  font-size: 0.9rem;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.neutral.lightGrayBlue};

  @media (${({ theme }) => theme.screen.md}) {
    margin-top: 2.5rem;
  }
`;
const Link = styled.li`
  text-align: center;
  margin: 1rem 0;
  font-size: 0.95rem;
  cursor: pointer;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.neutral.veryLightGray};
  }
  a:hover {
    color: ${({ theme }) => theme.colors.primary.green};
  }
`;

export {
  Container,
  Wrapper,
  Logo,
  Socials,
  Social,
  Copyright,
  LinksWrapper,
  Link,
};
