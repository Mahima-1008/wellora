function Payment() {
  return (
    <div style={{ padding: "40px 80px" }}>
      <h2>Payment</h2>

      <input placeholder="Card Number" />
      <input placeholder="Expiry Date" />
      <input placeholder="CVV" />

      <button style={{
        padding: "12px 20px",
        background: "green",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer"
      }}>
        Pay Now
      </button>
    </div>
  );
}

export default Payment;
