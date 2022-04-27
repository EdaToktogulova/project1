import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
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
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/top" element={<Top />} />
            <Route path="/novelty" element={<Novelty />} />
            <Route path="/discounts" element={<Discounts />} />
            <Route path="/about" element={<About />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/category" element={<Category />}/>
            </Routes>
        </Layout>
    </div>
  );
}

export default App;
