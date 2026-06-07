function Cart({ cart, setCart }) {
  const increaseQty = (index) => {
    const newCart = [...cart];
    newCart[index].qty += 1;
    setCart(newCart);
  };

  const decreaseQty = (index) => {
    const newCart = [...cart];
    if (newCart[index].qty > 1) newCart[index].qty -= 1;
    setCart(newCart);
  };

  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div style={{ padding: "40px 80px" }}>
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} style={{ marginBottom: "15px" }}>
              <strong>{item.name}</strong> — ₹{item.price}
              <div>
                <button onClick={() => decreaseQty(index)}>-</button>
                <span style={{ margin: "0 10px" }}>{item.qty}</span>
                <button onClick={() => increaseQty(index)}>+</button>
                <button onClick={() => removeItem(index)} style={{ marginLeft: "10px" }}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;
