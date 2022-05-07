import styled from "styled-components";

const Container = styled.div`
  background: ${({ theme }) => theme.colors.neutral.lightGrayBlue};
  text-align: center;
  padding: 3rem 1.4rem;
  color: ${({ theme }) => theme.colors.primary.blue};
  line-height: 1.5rem;

  @media (${({ theme }) => theme.screen.md}) {
    transform: translateY(-20%);
    text-align: left;
    padding: 3rem 10%;
  }

  @media (${({ theme }) => theme.screen.lg}) {
    transform: translateY(-40%);
  }
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
`;
const Title = styled.h2`
  font-weight: normal;
  margin: 0 auto;
  line-height: 2.2rem;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  width: 75%;

  @media (${({ theme }) => theme.screen.md}) {
    margin: 0 0 1.5rem 0;
    font-size: 1.5rem;
  }
`;
const Desc = styled.p`
  color: ${({ theme }) => theme.colors.neutral.grayBlue};

  @media (${({ theme }) => theme.screen.md}) {
    width: 75%;
    font-size: 0.8rem;
  }
`;
const FeatureWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (${({ theme }) => theme.screen.md}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
const Feature = styled.div`
  margin: 1.5rem 0;

  @media (${({ theme }) => theme.screen.md}) {
    width: 50%;
    font-size: 0.9rem;
  }

  @media (${({ theme }) => theme.screen.lg}) {
    width: calc(25% - 15px);
    margin: 5px;
  }
`;

const Image = styled.img``;
const FeatureTitle = styled.h3`
  font-weight: normal;
  margin: 1rem 0;
`;
const FeatureDesc = styled.p`
  color: ${({ theme }) => theme.colors.neutral.grayBlue};
  @media (${({ theme }) => theme.screen.md}) {
    font-size: 0.75rem;
  }
`;

export {
  Container,
  TitleWrapper,
  Title,
  Desc,
  FeatureWrapper,
  Feature,
  Image,
  FeatureTitle,
  FeatureDesc,
};
