import About from "../components/About";
import Featured from "../components/Featured";
import Hero from "../components/Hero";
import NewLetter from "../components/NewLetter";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Featured />
      <Testimonials />
      <NewLetter />
    </>
  );
};

export default Home;
