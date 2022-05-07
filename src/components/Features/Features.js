import {
  Container,
  Desc,
  Feature,
  FeatureDesc,
  FeatureTitle,
  FeatureWrapper,
  Image,
  Title,
  TitleWrapper,
} from "./Features.styled";
import Api from "../../images/icon-api.svg";
import Budgeting from "../../images/icon-budgeting.svg";
import Onboarding from "../../images/icon-onboarding.svg";
import Online from "../../images/icon-online.svg";

const Features = () => {
  return (
    <Container>
      <TitleWrapper>
        <Title>Why choose Easybank?</Title>
        <Desc>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </Desc>
      </TitleWrapper>
      <FeatureWrapper>
        <Feature>
          <Image src={Online}></Image>
          <FeatureTitle>Online Banking</FeatureTitle>
          <FeatureDesc>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.{" "}
          </FeatureDesc>
        </Feature>
        <Feature>
          <Image src={Budgeting}></Image>
          <FeatureTitle>Simple Budgeting</FeatureTitle>
          <FeatureDesc>
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.{" "}
          </FeatureDesc>
        </Feature>
        <Feature>
          <Image src={Onboarding}></Image>
          <FeatureTitle>Fast Onboarding</FeatureTitle>
          <FeatureDesc>
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </FeatureDesc>
        </Feature>
        <Feature>
          <Image src={Api}></Image>
          <FeatureTitle>Open API</FeatureTitle>
          <FeatureDesc>
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier
          </FeatureDesc>
        </Feature>
      </FeatureWrapper>
    </Container>
  );
};

export default Features;
