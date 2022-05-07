import {
  Container,
  Title,
  Card,
  Image,
  TextWrapper,
  Author,
  ArticleTitle,
  Desc,
  CardWrapper,
} from "./Articles.styled";
import Confetti from "../../images/image-confetti.jpg";
import Currency from "../../images/image-currency.jpg";
import Plane from "../../images/image-plane.jpg";
import Restaurant from "../../images/image-restaurant.jpg";

const Articles = () => {
  return (
    <Container>
      <Title>Latest Articles</Title>
      <CardWrapper>
        <Card>
          <Image src={Currency} alt="Currency" />
          <TextWrapper>
            <Author>By Claire Robinson</Author>
            <ArticleTitle>
              Receive money in any currency with no fees
            </ArticleTitle>
            <Desc>
              The world is getting smaller and we’re becoming more mobile. So
              why should you be forced to only receive money in a single …{" "}
            </Desc>
          </TextWrapper>
        </Card>
        <Card>
          <Image src={Restaurant} alt="Restaurant" />
          <TextWrapper>
            <Author>By Wilson Hutton</Author>
            <ArticleTitle>
              Treat yourself without worrying about money
            </ArticleTitle>
            <Desc>
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you …{" "}
            </Desc>
          </TextWrapper>
        </Card>
        <Card>
          <Image src={Plane} alt="Plane" />
          <TextWrapper>
            <Author>By Wilson Hutton</Author>
            <ArticleTitle>Take your Easybank card wherever you go</ArticleTitle>
            <Desc>
              We want you to enjoy your travels. This is why we don’t charge any
              fees on purchases while you’re abroad. We’ll even show you …{" "}
            </Desc>
          </TextWrapper>
        </Card>
        <Card>
          <Image src={Confetti} alt="Confetti" />
          <TextWrapper>
            <Author>By Claire Robinson</Author>
            <ArticleTitle>
              Our invite-only Beta accounts are now live!
            </ArticleTitle>
            <Desc>
              After a lot of hard work by the whole team, we’re excited to
              launch our closed beta. It’s easy to request an invite through the
              site ...
            </Desc>
          </TextWrapper>
        </Card>
      </CardWrapper>
    </Container>
  );
};

export default Articles;
