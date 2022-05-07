import styled from "styled-components";

const Container = styled.header`
  @media (${({ theme }) => theme.screen.md}) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

const ImgWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  z-index: 1;
  img:nth-child(1) {
    transform: translateY(-10%);
    width: 100%;
  }
  img:nth-child(2) {
    display: none;
  }

  img:nth-child(3) {
    position: absolute;
    top: -30%;
    left: 0;
    width: 100%;
  }

  @media (${({ theme }) => theme.screen.md}) {
    width: 50%;

    img:nth-child(1) {
      display: none;
    }
    img:nth-child(2) {
      display: block;
      width: 150%;
      transform: translate(-5%, -25%);
    }
    img:nth-child(3) {
      top: -15%;
      left: 17%;
    }
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 0 1rem;
  transform: translateY(-25%);

  @media (${({ theme }) => theme.screen.md}) {
    transform: translateY(-15%);
    padding: 0 10%;
    width: 50%;
    text-align: left;
    align-items: start;
  }
`;

const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.primary.blue};

  @media (${({ theme }) => theme.screen.md}) {
    font-size: 2rem;
  }

  @media (${({ theme }) => theme.screen.lg}) {
    font-size: 2.7rem;
  }
`;
const Desc = styled.p`
  margin: 1.75rem 0;
  color: ${({ theme }) => theme.colors.neutral.grayBlue};

  @media (${({ theme }) => theme.screen.md}) {
    font-size: 0.8rem;
  }
  @media (${({ theme }) => theme.screen.lg}) {
    font-size: 1em;
  }
`;

export { Container, ImgWrapper, TitleWrapper, Title, Desc };
