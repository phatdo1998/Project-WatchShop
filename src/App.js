import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./page/Home/Home";
import DetailWatch from "./page/detailWatch/DetailWatch";
import Cart from "./page/cart/Cart";
import ShipmentDetails from "./page/shipmentDetails/ShipmentDetails";
import Products from "./page/products/Products";
import Search from "./page/search/Search";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<DetailWatch />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipment" element={<ShipmentDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
