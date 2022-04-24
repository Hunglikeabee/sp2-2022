import React from 'react';
import Products from './Pages/Products/Products';
import Product from './Pages/Product/Product';
import HeaderContainer from './components/header/HeaderContainer';
import Footer from './components/footer/Footer';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import Admin from './Pages/Admin/Admin';
import Cart from './Pages/Cart/Cart';
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import ContainerBody from './components/containers/ContainerBody';
import ContainerAll from './components/containers/ContainerAll';
import Search from './Pages/Search/Search';
import './App.css';

const theme = {
  footerbackground: "#2B0712",
  firstcolor: "brown",
  secondcolor: "#D4AA37"
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContainerAll>
      <HeaderContainer />
        <ContainerBody>
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/products" element={<Products />} />
              <Route path="/shoes" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/search" element={<Search />} />
          </Routes>
        </ContainerBody>
        <Footer />
      </ContainerAll>
    </ThemeProvider>
  );
}

export default App;
