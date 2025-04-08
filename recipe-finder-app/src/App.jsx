import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


import Header from "./components/Header";
import Footer from "./components/Footer";
import  SeaFood from "./pages/SeaFood";
import RecipeDetails from "./pages/RecipeDetails";
import Vegetarian from "./pages/Vegetarian";
import Cuisines from "./pages/Cuisines";
import Holidays from "./pages/Holidays";

const App = () => {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seafood" element={<SeaFood />} />
        <Route path="/vegetarian" element={<Vegetarian />} />
        <Route path="/cuisines" element={<Cuisines />} />
        <Route path="/holidays" element={<Holidays />} />
        
        <Route path="/meal/:id" element={<RecipeDetails />} />
        
        
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
