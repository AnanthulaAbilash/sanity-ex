import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" exact="true" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<SingleProduct />} path="/products/:slug" />
        <Route element={<Products />} path="/products" />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
