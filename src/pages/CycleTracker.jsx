import { useState } from "react";
import { FiCalendar, FiDroplet, FiHeart, FiCheckCircle } from "react-icons/fi";

function CycleTracker() {
  const [lastPeriod, setLastPeriod] = useState("");
  const [cycleLength, setCycleLength] = useState(28);
  const [showPrediction, setShowPrediction] = useState(false);
  const [nextDate, setNextDate] = useState("");

  const calculateNext = () => {
    if (!lastPeriod) return;
    const date = new Date(lastPeriod);
    date.setDate(date.getDate() + parseInt(cycleLength));
    setNextDate(date.toDateString());
    setShowPrediction(true);
  };

  return (
    <div className="fade-in" style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "32px", color: "var(--text-primary)", marginBottom: "10px" }}>Cycle & Wellness Tracker</h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "16px" }}>Predict your next cycle and get personalized care recommendations.</p>
      </div>

      <div style={{ display: "flex", gap: "30px", flexWrap: "wrap", justifyContent: "center" }}>
        {/* Tracker Card */}
        <div style={{
          background: "var(--bg-secondary)",
          padding: "40px",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-sm)",
          width: "100%",
          maxWidth: "450px",
          border: "1px solid var(--border-light)"
        }}>
          <div style={{ marginBottom: "25px" }}>
            <label style={{ display: "block", marginBottom: "10px", fontWeight: "500", color: "var(--text-primary)" }}>First day of last period:</label>
            <input 
              type="date" 
              value={lastPeriod}
              onChange={(e) => setLastPeriod(e.target.value)}
              style={{
                width: "100%",
                padding: "15px",
                borderRadius: "10px",
                border: "1px solid var(--border-light)",
                fontSize: "15px",
                color: "var(--text-primary)",
                fontFamily: "inherit",
                outline: "none"
              }}
            />
          </div>

          <div style={{ marginBottom: "30px" }}>
            <label style={{ display: "block", marginBottom: "10px", fontWeight: "500", color: "var(--text-primary)" }}>Average cycle length (days):</label>
            <input 
              type="number" 
              value={cycleLength}
              onChange={(e) => setCycleLength(e.target.value)}
              style={{
                width: "100%",
                padding: "15px",
                borderRadius: "10px",
                border: "1px solid var(--border-light)",
                fontSize: "15px",
                color: "var(--text-primary)",
                fontFamily: "inherit",
                outline: "none"
              }}
            />
          </div>

          <button
            onClick={calculateNext}
            style={{
              width: "100%",
              padding: "15px",
              background: "var(--text-primary)",
              color: "white",
              border: "none",
              borderRadius: "30px",
              fontSize: "16px",
              fontWeight: "500",
              cursor: "pointer",
              boxShadow: "var(--shadow-sm)"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
          >
            Predict Next Cycle
          </button>

          {showPrediction && (
            <div className="fade-in" style={{
              marginTop: "30px",
              padding: "20px",
              background: "rgba(212, 163, 115, 0.1)",
              borderRadius: "10px",
              textAlign: "center",
              border: "1px solid var(--accent-color)"
            }}>
              <p style={{ color: "var(--text-secondary)", marginBottom: "5px" }}>Estimated Next Cycle:</p>
              <h2 style={{ color: "var(--accent-color)", fontSize: "24px" }}>{nextDate}</h2>
            </div>
          )}
        </div>

        {/* Subscription Suggestion */}
        <div style={{
          background: "var(--bg-secondary)",
          padding: "40px",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-sm)",
          width: "100%",
          maxWidth: "450px",
          border: "1px solid var(--border-light)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}>
          <h3 style={{ fontSize: "22px", marginBottom: "15px" }}>Never Run Out of Essentials</h3>
          <p style={{ color: "var(--text-secondary)", marginBottom: "25px", lineHeight: "1.6" }}>
            Let us align your deliveries with your cycle. We'll curate a personalized care package sent right before you need it.
          </p>

          <ul style={{ listStyle: "none", marginBottom: "30px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-secondary)" }}>
              <FiCheckCircle color="var(--accent-color)" /> Smart auto-delivery based on your dates
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-secondary)" }}>
              <FiCheckCircle color="var(--accent-color)" /> Curated comfort items included
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-secondary)" }}>
              <FiCheckCircle color="var(--accent-color)" /> Cancel or pause anytime
            </li>
          </ul>

          <button style={{
            padding: "15px",
            background: "transparent",
            color: "var(--text-primary)",
            border: "1px solid var(--text-primary)",
            borderRadius: "30px",
            fontSize: "16px",
            fontWeight: "500",
            cursor: "pointer"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--text-primary)";
            e.currentTarget.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "var(--text-primary)";
          }}>
            Set up Subscription Box
          </button>
        </div>
      </div>
    </div>
  );
}

export default CycleTracker;
