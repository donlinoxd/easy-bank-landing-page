import styled from "styled-components";

const Container = styled.div`
  padding: 5rem 1.4rem;

  @media (${({ theme }) => theme.screen.md}) {
    transform: translateY(-15%);
    padding: 5rem 10% 0;
  }
  @media (${({ theme }) => theme.screen.lg}) {
    transform: translateY(-20%);
  }
`;
const Title = styled.h2`
  text-align: center;
  font-weight: normal;
  font-size: 2rem;
  @media (${({ theme }) => theme.screen.md}) {
    margin-bottom: 2rem;
  }
`;
const CardWrapper = styled.div`
  width: 100%;

  @media (${({ theme }) => theme.screen.md}) {
    display: flex;
    flex-wrap: wrap;
  }
`;
const Card = styled.div`
  width: 100%;
  max-width: 350px;
  height: 450px;
  margin: 3rem auto;
  background: ${({ theme }) => theme.colors.neutral.white};
  border-radius: 0.4rem;
  overflow: hidden;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.05);
  color: ${({ theme }) => theme.colors.neutral.grayBlue};

  @media (${({ theme }) => theme.screen.md}) {
    width: 45%;
    margin: 1rem auto;
  }

  @media (${({ theme }) => theme.screen.lg}) {
    width: calc(25% - 15px);
    margin: 1rem auto;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
`;
const TextWrapper = styled.div`
  padding: 1.5rem;
`;
const Author = styled.span`
  font-size: 0.8rem;
`;
const ArticleTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary.blue};
  font-weight: normal;
  margin: 0.8rem 0;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.primary.green};
  }
`;
const Desc = styled.p`
  font-size: 0.9rem;
`;

export {
  Container,
  Title,
  CardWrapper,
  Card,
  Image,
  TextWrapper,
  Author,
  ArticleTitle,
  Desc,
};
