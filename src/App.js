import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home/Home";
import DetailWatch from "./page/detailWatch/DetailWatch";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<DetailWatch />} />
        <Route path="/cart/:id" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
