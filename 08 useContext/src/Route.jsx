import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignIn from "./pages/auth/signin";
import Auth from "./pages/auth";
import SignUp from "./pages/auth/signup";
import ShowProducts from "./products/showProducts";
import ProductDetail from "./products/productDetail";
import { NotFound } from "./pages/NotFound";
import ThemeContextProvider from "./context/themeContext";
import UserContextProvider from "./context/userContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <ThemeContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              {/* simple routing */}
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />

              {/* Nested Routing  */}
              <Route path="/auth">
                <Route index element={<Auth />} />
                <Route path="signUp" element={<SignUp />} />
                <Route path="signIn" element={<SignIn />} />
              </Route>

              <Route path="/showProducts" element={<ShowProducts />} />
              <Route path="/productDetail" element={<ProductDetail />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ThemeContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
