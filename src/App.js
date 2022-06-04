import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Sections/Shared/Header";
import Footer from "./Sections/Shared/Footer";
import Home from "./Pages/Home/Home";
import Login from "./Pages/User/Login";

function App() {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
