import Header from "./components/Header";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import About from "./components/About";
import Featured from "./components/Featured";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Hero />
      <About />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default App;
