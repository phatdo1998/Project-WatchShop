import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./page/Home/Home";
import DetailWatch from "./page/detailWatch/DetailWatch";
import Cart from "./page/cart/Cart";
import ShipmentDetails from "./page/shipmentDetails/ShipmentDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<DetailWatch />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipment" element={<ShipmentDetails />} />
      </Routes>
    </div>
  );
}

export default App;
