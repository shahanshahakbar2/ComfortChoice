import React from "react";
import { Header, Footer, Navbar } from "./components";
import "./App.css";
import Home from "./routes/home/Home";
import { Route, Routes } from "react-router-dom";
import Shop from "./routes/shop/Shop";
import Contact from "./routes/contact/Contact";
import OurStory from "./routes/our-story/OurStory";
import Login from "./routes/login/Login";
import Cart from "./routes/cart/Cart";

const App = () => (
  <div className='App'>
    <Header />
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='shop' element={<Shop />} />
        <Route path='our-story' element={<OurStory />} />
        <Route path='contact' element={<Contact />} />
        <Route path='login' element={<Login />} />
      </Route>
      <Route path='cart' element={<Cart />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
