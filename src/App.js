import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Sections/Shared/Header";
import Footer from "./Sections/Shared/Footer";
import Home from "./Pages/Home/Home";
import Login from "./Pages/User/Login";
import SignUp from "./Pages/User/SignUp";

function App() {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
