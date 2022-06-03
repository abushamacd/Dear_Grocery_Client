import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Sections/Shared/Header";
import Footer from "./Sections/Shared/Footer";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
