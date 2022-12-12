import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/*" element={<Product />}></Route>
        <Route path="/product/:productName" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
