import { useState, useEffect } from "react";
import { FiCheckCircle, FiInfo } from "react-icons/fi";

function CycleTracker() {
  const [lastPeriod, setLastPeriod] = useState("");
  const [cycleLength, setCycleLength] = useState(28);
  const [showPrediction, setShowPrediction] = useState(false);
  const [nextDate, setNextDate] = useState("");
  const [daysUntil, setDaysUntil] = useState(0);

  const calculateNext = () => {
    if (!lastPeriod) return;
    const date = new Date(lastPeriod);
    date.setDate(date.getDate() + parseInt(cycleLength));
    setNextDate(date.toDateString());
    
    const today = new Date();
    const diffTime = date - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysUntil(diffDays > 0 ? diffDays : 0);
    
    setShowPrediction(true);
  };

  // Circular progress math
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  // Let's say a cycle is complete when daysUntil is 0.
  // Progress = (cycleLength - daysUntil) / cycleLength
  const progress = showPrediction ? Math.max(0, Math.min(1, (cycleLength - daysUntil) / cycleLength)) : 0;
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <div className="fade-in" style={{ padding: "60px 20px", maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ fontSize: "36px", color: "var(--text-primary)", fontWeight: "600", marginBottom: "15px" }}>Your Cycle, Understood.</h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "16px", maxWidth: "500px", margin: "0 auto" }}>
          Log your dates to predict your next cycle, understand your phases, and sync your essential deliveries automatically.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "start", maxWidth: "1000px", margin: "0 auto" }}>
        
        {/* Left: Tracker Visualizer & Form */}
        <div style={{
          background: "var(--bg-secondary)",
          padding: "40px",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-lg)",
          border: "1px solid var(--border-light)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          {/* Circular SVG Tracker */}
          <div style={{ position: "relative", width: "220px", height: "220px", marginBottom: "30px" }}>
            <svg width="220" height="220" style={{ transform: "rotate(-90deg)" }}>
              {/* Background Circle */}
              <circle cx="110" cy="110" r={radius} stroke="var(--border-light)" strokeWidth="15" fill="transparent" />
              {/* Progress Circle */}
              <circle 
                cx="110" 
                cy="110" 
                r={radius} 
                stroke="var(--accent-color)" 
                strokeWidth="15" 
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                style={{ transition: "stroke-dashoffset 1s ease-in-out" }}
              />
            </svg>
            <div style={{
              position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center"
            }}>
              {showPrediction ? (
                <>
                  <span style={{ fontSize: "42px", fontWeight: "700", color: "var(--text-primary)", lineHeight: "1" }}>{daysUntil}</span>
                  <span style={{ display: "block", fontSize: "14px", color: "var(--text-secondary)", marginTop: "5px" }}>Days to go</span>
                </>
              ) : (
                <span style={{ fontSize: "14px", color: "var(--text-secondary)", padding: "0 20px", display: "block" }}>Enter dates to predict</span>
              )}
            </div>
          </div>

          <div style={{ width: "100%", marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "var(--text-primary)", fontSize: "14px" }}>First day of last period:</label>
            <input 
              type="date" 
              value={lastPeriod}
              onChange={(e) => setLastPeriod(e.target.value)}
              style={{ width: "100%", padding: "12px 15px", borderRadius: "10px", border: "1px solid var(--border-light)", fontSize: "15px", color: "var(--text-primary)", fontFamily: "inherit", outline: "none", background: "var(--bg-primary)" }}
            />
          </div>

          <div style={{ width: "100%", marginBottom: "30px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "var(--text-primary)", fontSize: "14px" }}>Average cycle length (days):</label>
            <input 
              type="number" 
              value={cycleLength}
              onChange={(e) => setCycleLength(e.target.value)}
              style={{ width: "100%", padding: "12px 15px", borderRadius: "10px", border: "1px solid var(--border-light)", fontSize: "15px", color: "var(--text-primary)", fontFamily: "inherit", outline: "none", background: "var(--bg-primary)" }}
            />
          </div>

          <button
            onClick={calculateNext}
            style={{
              width: "100%", padding: "16px", background: "var(--text-primary)", color: "white", border: "none", borderRadius: "30px", fontSize: "16px", fontWeight: "500", cursor: "pointer", boxShadow: "var(--shadow-sm)", transition: "all 0.3s"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "var(--shadow-sm)"; }}
          >
            Calculate Next Cycle
          </button>
        </div>

        {/* Right: Subscription Box / Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
          
          {showPrediction && (
            <div className="fade-in" style={{
              background: "var(--accent-light)", padding: "25px", borderRadius: "var(--radius-md)", border: `1px solid var(--accent-color)`, display: "flex", alignItems: "flex-start", gap: "15px"
            }}>
              <FiInfo size={24} color="var(--accent-hover)" style={{ flexShrink: 0, marginTop: "2px" }} />
              <div>
                <h4 style={{ color: "var(--text-primary)", fontSize: "16px", marginBottom: "5px" }}>Next Period Expected:</h4>
                <p style={{ color: "var(--accent-hover)", fontSize: "20px", fontWeight: "600", marginBottom: "10px" }}>{nextDate}</p>
                <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.5" }}>
                  Based on your {cycleLength}-day cycle, you are currently in your luteal phase. Expect lower energy levels and prepare your essentials.
                </p>
              </div>
            </div>
          )}

          <div style={{
            background: "var(--bg-secondary)", padding: "40px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-sm)", border: "1px solid var(--border-light)"
          }}>
            <div style={{ display: "inline-block", background: "var(--accent-light)", color: "var(--accent-hover)", padding: "6px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "1px" }}>Smart Subscriptions</div>
            <h3 style={{ fontSize: "24px", marginBottom: "15px", color: "var(--text-primary)" }}>Never Run Out Again</h3>
            <p style={{ color: "var(--text-secondary)", marginBottom: "30px", lineHeight: "1.6", fontSize: "15px" }}>
              Sync your product deliveries exactly with your cycle dates. We automatically ship your curated care package 3 days before you need it.
            </p>

            <ul style={{ listStyle: "none", marginBottom: "35px", display: "flex", flexDirection: "column", gap: "15px" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "12px", color: "var(--text-primary)", fontSize: "15px" }}>
                <FiCheckCircle size={20} color="var(--accent-color)" /> Smart auto-delivery based on your dates
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "12px", color: "var(--text-primary)", fontSize: "15px" }}>
                <FiCheckCircle size={20} color="var(--accent-color)" /> Curated comfort items included (tea, patches)
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "12px", color: "var(--text-primary)", fontSize: "15px" }}>
                <FiCheckCircle size={20} color="var(--accent-color)" /> Pause, skip, or cancel anytime effortlessly
              </li>
            </ul>

            <button style={{
              width: "100%", padding: "16px", background: "transparent", color: "var(--text-primary)", border: "1px solid var(--text-primary)", borderRadius: "30px", fontSize: "16px", fontWeight: "500", cursor: "pointer", transition: "all 0.3s"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--text-primary)"; e.currentTarget.style.color = "white"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--text-primary)"; }}>
              Set up Sync Subscription
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CycleTracker;
