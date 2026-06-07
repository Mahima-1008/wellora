function Checkout({ total }) {
  return (
    <div style={{ padding: "40px 80px" }}>
      <h2>Checkout</h2>

      <input placeholder="Full Name" />
      <input placeholder="Address" />
      <input placeholder="City" />
      <input placeholder="Pincode" />

      <h3>Total Amount: ₹{total}</h3>

      <button style={{
        padding: "12px 20px",
        background: "#ff4d88",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer"
      }}>
        Proceed to Payment
      </button>
    </div>
  );
}

export default Checkout;
