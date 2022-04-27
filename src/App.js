import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import Category from "./pages/Category";
import Discounts from "./pages/Discounts";
import Home from "./pages/Home";
import Novelty from "./pages/Novelty";
import Top from "./pages/Top";

function App() {
  return (
    <div className="App">
      <>
        <Nav />
        <Header />
        <Home />
        <Top />
        <Discounts />
        <Novelty />
        <About />
        <Category />
        <Catalog />
        <Footer />
      </>
    </div>
  );
}

export default App;
