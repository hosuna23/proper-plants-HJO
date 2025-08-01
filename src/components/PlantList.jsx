export default function PlantList({ plantArr, cart, setCart }) {
  const handleAddToCart = (plant) => {
    const existingItem = cart.find((item) => item.id === plant.id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...plant, quantity: 1 }]);
    }
  };

  return (
    <ul className="plantList">
      {plantArr.map((plant) => (
        <li key={plant.id} className="item">
          <h3 className="image">{plant.image}</h3>
          <h3 className="name">{plant.name}</h3>
          <button onClick={() => handleAddToCart(plant)}>Add to cart</button>
        </li>
      ))}
    </ul>
  );
}
