import Header from "./components/Header";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/destination"
          element={<h1>heello uko destination page</h1>}
        />
      </Routes>
    </>
  );
};

export default App;
