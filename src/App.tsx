import Header from "./components/Header";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Destination from "./pages/Destination";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
      </Routes>
    </>
  );
};

export default App;
