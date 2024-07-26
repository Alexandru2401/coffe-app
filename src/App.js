import "./App.css";
import Header from "./main/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./main/Home";
import Footer from "./main/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Ingredients from "./pages/Ingredients";
function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/ingredients" element={<Ingredients />} />
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
