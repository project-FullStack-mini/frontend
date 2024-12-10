import { Home } from "../components/Home.jsx";
import { Login } from "../components/Login.jsx";
import {Register } from "../components/Register.jsx"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

    </>
  );
}

export default App;
