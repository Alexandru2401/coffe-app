import "./App.css";
import Header from "./main/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./main/Home";
import Footer from "./main/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Details from "./components/Details";
import NotFound from "./pages/NotFoundPage";
import Favorites from "./pages/Favourite";
import { useReducer } from "react";
import { favoriteReducer, initialFavorite } from "./store/reducer";
import { FavoriteContext } from "./store/context";

function App() {
  const [state, dispatch] = useReducer(favoriteReducer, initialFavorite);
  const favoriteContextValue = {
    state,
    dispatch,
  };
  return (
    <FavoriteContext.Provider value={favoriteContextValue}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/favourites" element={<Favorites />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </FavoriteContext.Provider>
  );
}

export default App;
