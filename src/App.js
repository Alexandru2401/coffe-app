import React, { Suspense, lazy } from "react";
import "./App.css";
import Header from "./main/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./main/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useReducer } from "react";
import {
  favoriteReducer,
  initialFavorite,
} from "./store/favoriteStore/reducer";
import { FavoriteContext } from "./store/favoriteStore/context";
import FAQ from "./components/footerComponents/FAQ";

const Home = lazy(() => import("./main/Home"));
const Products = lazy(() => import("./pages/Products"));
const Contact = lazy(() => import("./pages/Contact"));
const Details = lazy(() => import("./components/generalComponents/Details"));
const NotFound = lazy(() => import("./pages/NotFoundPage"));
const Favorites = lazy(() => import("./pages/Favourite"));
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
          <Suspense fallback="Loading...">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/favourites" element={<Favorites />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </FavoriteContext.Provider>
  );
}

export default App;
