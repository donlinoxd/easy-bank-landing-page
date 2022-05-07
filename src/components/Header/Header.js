import {
  Container,
  Desc,
  ImgWrapper,
  Title,
  TitleWrapper,
} from "./Header.styled";
import { Button } from "../styled/Button";
import IntroBgDesktop from "../../images/bg-intro-desktop.svg";
import IntroBgMobile from "../../images/bg-intro-mobile.svg";
import MockUp from "../../images/image-mockups.png";

const Header = () => {
  return (
    <Container>
      <ImgWrapper>
        <img src={IntroBgMobile} alt="Intro Background" />
        <img src={IntroBgDesktop} alt="Intro Background" />
        <img src={MockUp} alt="Intro Background" />
      </ImgWrapper>
      <TitleWrapper>
        <Title>Next generation digital banking</Title>
        <Desc>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </Desc>
        <Button>Request Invite</Button>
      </TitleWrapper>
    </Container>
  );
};

export default Header;
