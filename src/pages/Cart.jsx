import { Link, useNavigate } from "react-router-dom";
import { FiTrash2, FiMinus, FiPlus, FiArrowRight } from "react-icons/fi";

function Cart({ cart, setCart }) {
  const navigate = useNavigate();

  const increaseQty = (index) => {
    const newCart = [...cart];
    newCart[index].qty += 1;
    setCart(newCart);
  };

  const decreaseQty = (index) => {
    const newCart = [...cart];
    if (newCart[index].qty > 1) {
      newCart[index].qty -= 1;
      setCart(newCart);
    }
  };

  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="fade-in" style={{ padding: "60px 20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h2 style={{ fontSize: "32px", marginBottom: "40px", color: "var(--text-primary)" }}>Your Shopping Bag</h2>

      {cart.length === 0 ? (
        <div style={{ textAlign: "center", padding: "80px 20px", background: "var(--bg-secondary)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-light)" }}>
          <div style={{ fontSize: "60px", marginBottom: "20px" }}>🛍️</div>
          <h3 style={{ fontSize: "24px", color: "var(--text-primary)", marginBottom: "15px" }}>Your bag is empty</h3>
          <p style={{ color: "var(--text-secondary)", marginBottom: "30px" }}>Looks like you haven't added any essentials yet.</p>
          <Link to="/" style={{
            padding: "15px 30px",
            background: "var(--accent-color)",
            color: "white",
            borderRadius: "30px",
            fontWeight: "500",
            display: "inline-block",
            textDecoration: "none"
          }}>
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "40px", alignItems: "start" }}>
          {/* Cart Items */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {cart.map((item, index) => (
              <div key={index} style={{
                display: "flex",
                gap: "25px",
                padding: "25px",
                background: "var(--bg-secondary)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border-light)",
                boxShadow: "var(--shadow-sm)",
                alignItems: "center"
              }}>
                <div style={{ width: "100px", height: "100px", background: "#f8f8f8", borderRadius: "12px", overflow: "hidden" }}>
                  {/* Using a placeholder for the cart image to keep it simple, since we didn't store image URLs in state. */}
                  <img src={"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=200&q=80"} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: "18px", color: "var(--text-primary)", fontWeight: "500", marginBottom: "8px" }}>{item.name}</h4>
                  <p style={{ color: "var(--text-secondary)", fontSize: "14px", marginBottom: "15px" }}>Category: {item.category}</p>
                  
                  <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                    {/* Quantity Control */}
                    <div style={{ display: "flex", alignItems: "center", border: "1px solid var(--border-light)", borderRadius: "20px", overflow: "hidden", width: "fit-content" }}>
                      <button onClick={() => decreaseQty(index)} style={{ padding: "8px 12px", background: "transparent", border: "none", cursor: "pointer", color: "var(--text-primary)" }}><FiMinus /></button>
                      <span style={{ width: "30px", textAlign: "center", fontSize: "15px", fontWeight: "500" }}>{item.qty}</span>
                      <button onClick={() => increaseQty(index)} style={{ padding: "8px 12px", background: "transparent", border: "none", cursor: "pointer", color: "var(--text-primary)" }}><FiPlus /></button>
                    </div>
                    
                    <button onClick={() => removeItem(index)} style={{
                      background: "transparent", border: "none", color: "#e74c3c", display: "flex", alignItems: "center", gap: "6px", cursor: "pointer", fontSize: "14px"
                    }}>
                      <FiTrash2 /> Remove
                    </button>
                  </div>
                </div>
                
                <div style={{ fontSize: "20px", fontWeight: "600", color: "var(--text-primary)" }}>
                  ₹{item.price * item.qty}
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div style={{
            background: "var(--bg-secondary)",
            padding: "35px",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--border-light)",
            boxShadow: "var(--shadow-sm)",
            position: "sticky",
            top: "100px"
          }}>
            <h3 style={{ fontSize: "20px", marginBottom: "25px", paddingBottom: "15px", borderBottom: "1px solid var(--border-light)" }}>Order Summary</h3>
            
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px", color: "var(--text-secondary)" }}>
              <span>Subtotal ({cart.reduce((s, i) => s + i.qty, 0)} items)</span>
              <span>₹{total}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "25px", color: "var(--text-secondary)" }}>
              <span>Estimated Shipping</span>
              <span style={{ color: "var(--accent-color)" }}>Free</span>
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "30px", paddingTop: "20px", borderTop: "1px solid var(--border-light)", fontSize: "22px", fontWeight: "600", color: "var(--text-primary)" }}>
              <span>Total</span>
              <span>₹{total}</span>
            </div>
            
            <button
              onClick={() => navigate('/checkout')}
              style={{
                width: "100%",
                padding: "18px",
                background: "var(--text-primary)",
                color: "white",
                border: "none",
                borderRadius: "30px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                transition: "background 0.3s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "#000"}
              onMouseLeave={(e) => e.currentTarget.style.background = "var(--text-primary)"}
            >
              Checkout Securely <FiArrowRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
