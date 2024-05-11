import React from "react";
import { Header, Footer, Navbar } from "./components";
import "./App.css";
import Home from "./container/home/Home";
import { Route, Routes } from "react-router-dom";
import Shop from "./container/shop/Shop";
import Contact from "./container/contact/Contact";
import OurStory from "./container/our-story/OurStory";

const App = () => (
  <div className='App'>
    <Header />
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='our-story' element={<OurStory />} />
      <Route path='contact' element={<Contact />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
