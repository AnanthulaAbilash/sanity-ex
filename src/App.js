import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import Navbar from "./components/Navbar";
import styles from "./index.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<About />} path="/about" />
        <Route element={<SingleProduct />} path="/products/:slug" />
        <Route element={<Products />} path="/products" />
      </Routes>
    </Router>
  );
}

export default App;
