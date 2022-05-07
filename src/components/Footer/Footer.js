import {
  Container,
  Wrapper,
  Logo,
  Socials,
  Social,
  Copyright,
  LinksWrapper,
  Link,
} from "./Footer.styled";

import { Button } from "../styled/Button";
import LogoSrc from "../../images/logo-white.svg";
import Facebook from "../../images/icon-facebook.svg";
import Instagram from "../../images/icon-instagram.svg";
import Pinterest from "../../images/icon-pinterest.svg";
import Twitter from "../../images/icon-twitter.svg";
import Youtube from "../../images/icon-youtube.svg";

const Footer = () => {
  return (
    <Container>
      <Wrapper left>
        <Logo src={LogoSrc} alt="Logo" />
        <Socials>
          <Social src={Facebook} alt="Facebook" />
          <Social src={Youtube} alt="Youtube" />
          <Social src={Twitter} alt="Twitter" />
          <Social src={Pinterest} alt="Pinterest" />
          <Social src={Instagram} alt="Instagram" />
        </Socials>
      </Wrapper>
      <LinksWrapper>
        <Link>
          <a href="/">About Us</a>
        </Link>
        <Link>
          <a href="/">Contact</a>
        </Link>
        <Link>
          <a href="/">Blog</a>
        </Link>
        <Link>
          <a href="/">Careers</a>
        </Link>
        <Link>
          <a href="/">Support</a>
        </Link>
        <Link>
          <a href="/">Privacy Policy</a>
        </Link>
      </LinksWrapper>
      <Wrapper>
        <Button>Request Invite</Button>
        <Copyright>&copy; Easybank, All Rights Reserved</Copyright>
      </Wrapper>
    </Container>
  );
};

export default Footer;
