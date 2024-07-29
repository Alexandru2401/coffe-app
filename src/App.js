import "./App.css";
import Header from "./main/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./main/Home";
import Footer from "./main/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Ingredients from "./pages/Ingredients";
import Details from "./components/Details";
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
          <Route path="/details/:id" element={<Details />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
