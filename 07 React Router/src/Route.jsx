import { useState } from "react";
import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignIn from "./pages/auth/signin";
import Auth from "./pages/auth";
import SignUp from "./pages/auth/signup";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          {/* simple routing */}

          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />

          <Route path="/auth" element={<Outlet />}>
            <Route index element={<Auth />} />
            <Route path="signUp" element={<SignUp />} />
            <Route path="signIn" element={<SignIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
