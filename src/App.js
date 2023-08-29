import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home/Home";
import DetailWatch from "./page/detailWatch/DetailWatch";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<DetailWatch />} />
      </Routes>
    </div>
  );
}

export default App;
