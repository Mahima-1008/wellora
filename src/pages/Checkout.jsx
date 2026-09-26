import { useState } from "react";
import { FiShield, FiPackage, FiCreditCard } from "react-icons/fi";

function Checkout({ total = 1250 }) {
  const [discreet, setDiscreet] = useState(false);

  return (
    <div className="fade-in" style={{ padding: "60px 20px", maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 350px", gap: "40px" }}>
      
      {/* Left Column: Form */}
      <div>
        <h2 style={{ fontSize: "28px", marginBottom: "30px", color: "var(--text-primary)" }}>Secure Checkout</h2>
        
        <div style={{
          background: "var(--bg-secondary)",
          padding: "30px",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-sm)",
          border: "1px solid var(--border-light)"
        }}>
          <h3 style={{ fontSize: "18px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
            <FiPackage /> Shipping Details
          </h3>
          
          <div style={{ display: "grid", gap: "15px" }}>
            <input 
              placeholder="Full Name" 
              style={{ padding: "12px 15px", borderRadius: "8px", border: "1px solid var(--border-light)", outline: "none", fontSize: "14px", fontFamily: "inherit" }} 
            />
            <input 
              placeholder="Address Line 1" 
              style={{ padding: "12px 15px", borderRadius: "8px", border: "1px solid var(--border-light)", outline: "none", fontSize: "14px", fontFamily: "inherit" }} 
            />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
              <input 
                placeholder="City" 
                style={{ padding: "12px 15px", borderRadius: "8px", border: "1px solid var(--border-light)", outline: "none", fontSize: "14px", fontFamily: "inherit" }} 
              />
              <input 
                placeholder="Pincode" 
                style={{ padding: "12px 15px", borderRadius: "8px", border: "1px solid var(--border-light)", outline: "none", fontSize: "14px", fontFamily: "inherit" }} 
              />
            </div>
          </div>

          {/* Discreet Packaging Toggle */}
          <div style={{
            marginTop: "30px",
            padding: "20px",
            background: "var(--bg-primary)",
            borderRadius: "10px",
            border: "1px solid var(--border-light)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <div>
              <h4 style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--text-primary)", marginBottom: "5px" }}>
                <FiShield color="var(--accent-color)" /> Discreet Packaging
              </h4>
              <p style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
                Ship in a plain, unbranded box for your privacy.
              </p>
            </div>
            
            <div 
              onClick={() => setDiscreet(!discreet)}
              style={{
                width: "50px",
                height: "26px",
                background: discreet ? "var(--accent-color)" : "var(--border-light)",
                borderRadius: "13px",
                position: "relative",
                cursor: "pointer",
                transition: "background 0.3s"
              }}
            >
              <div style={{
                width: "22px",
                height: "22px",
                background: "white",
                borderRadius: "50%",
                position: "absolute",
                top: "2px",
                left: discreet ? "26px" : "2px",
                transition: "left 0.3s",
                boxShadow: "var(--shadow-sm)"
              }} />
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Order Summary */}
      <div>
        <div style={{
          background: "var(--bg-secondary)",
          padding: "30px",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-sm)",
          border: "1px solid var(--border-light)",
          position: "sticky",
          top: "100px"
        }}>
          <h3 style={{ fontSize: "18px", marginBottom: "25px", borderBottom: "1px solid var(--border-light)", paddingBottom: "15px" }}>
            Order Summary
          </h3>
          
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px", color: "var(--text-secondary)", fontSize: "14px" }}>
            <span>Subtotal</span>
            <span>₹{total}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px", color: "var(--text-secondary)", fontSize: "14px" }}>
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "25px", color: "var(--text-secondary)", fontSize: "14px" }}>
            <span>Discreet Packaging</span>
            <span>{discreet ? "₹50" : "₹0"}</span>
          </div>
          
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "30px", borderTop: "1px solid var(--border-light)", paddingTop: "15px", fontWeight: "600", fontSize: "18px" }}>
            <span>Total</span>
            <span>₹{discreet ? total + 50 : total}</span>
          </div>

          <button style={{
            width: "100%",
            padding: "16px",
            background: "var(--text-primary)",
            color: "white",
            border: "none",
            borderRadius: "30px",
            fontSize: "16px",
            fontWeight: "500",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            boxShadow: "var(--shadow-sm)",
            transition: "transform 0.2s"
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
            <FiCreditCard /> Pay Securely
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
