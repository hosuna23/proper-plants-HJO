import PLANTS from "./data";
import PlantList from "./components/PlantList";
import Cart from "./components/Cart";
import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <h1>Proper Plants</h1>
      <div className="sections">
        <div className="plant-section">
          <h2>Plants</h2>
          <PlantList plantArr={PLANTS} cart={cart} setCart={setCart} />
        </div>
        <div className="cart">
          <Cart cart={cart} setCart={setCart} />
        </div>
      </div>
    </>
  );
}
