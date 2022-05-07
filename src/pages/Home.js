import Articles from "../components/Articles/Articles";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Features />
      <Articles />
      <Footer />
    </>
  );
};

export default Home;
