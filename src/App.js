import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/Home/Home";
import DetailWatch from "./page/detailWatch/DetailWatch";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<DetailWatch />} />
      </Routes>
    </div>
  );
}

export default App;
