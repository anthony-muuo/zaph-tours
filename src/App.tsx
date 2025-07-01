import Header from "./components/Header";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import About from "./components/About";
import Featured from "./components/Featured";
import Testimonials from "./components/Testimonials";
import NewLetter from "./components/NewLetter";

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Hero />
      <About />
      <Featured />
      <Testimonials />
      <NewLetter />
    </div>
  );
};

export default App;
