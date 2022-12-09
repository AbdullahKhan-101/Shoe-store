import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import ShoeDetail from "./components/ShoeDetail";
import Shop from "./components/Shop";
import ShopIndex from "./components/ShopIndex";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />}>
          <Route path="/shop/" element={<ShopIndex />} />
          <Route path="/shop/:id" element={<ShoeDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
