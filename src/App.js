import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBarTop from "./components/NavBar" 
import Home from "./pages/Home";
import Form from "./pages/Form";

function App() {
  return(
    <>
    <NavBarTop/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
