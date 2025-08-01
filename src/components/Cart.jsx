export default function Cart({ cart, setCart }) {
  const increment = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  };

  return (
    <>
      <h2>Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <span>{item.image} {item.name}</span>
          <button onClick={() => decrement(item.id)}>-</button>
          <span className="result">{item.quantity}</span>
          <button onClick={() => increment(item.id)}>+</button>
        </div>
      ))}
    </>
  );
}
