import { useState } from "react";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

function ProductQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: "age",
      question: "Which life stage are you currently in?",
      options: ["Teens (13-19)", "20s", "30s", "40s", "50+"]
    },
    {
      id: "flow",
      question: "How would you describe your typical flow?",
      options: ["Light", "Medium", "Heavy", "Variable"]
    },
    {
      id: "preferences",
      question: "Any specific body or skin preferences?",
      options: ["Very sensitive skin", "Prefer organic / eco-friendly", "No specific preference"]
    }
  ];

  const handleOptionClick = (answer) => {
    setAnswers({ ...answers, [questions[step].id]: answer });
    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 400);
    } else {
      setTimeout(() => setShowResults(true), 400);
    }
  };

  const progress = ((step) / questions.length) * 100;

  return (
    <div style={{ padding: "60px 20px", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
      {!showResults ? (
        <div className="fade-in" key={step} style={{
          background: "var(--bg-secondary)",
          padding: "50px",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-md)",
          border: "1px solid var(--border-light)",
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Progress Bar */}
          <div style={{ position: "absolute", top: 0, left: 0, height: "6px", width: "100%", background: "var(--border-light)" }}>
            <div style={{ 
              height: "100%", 
              width: `${progress}%`, 
              background: "var(--accent-color)", 
              transition: "width 0.4s ease-out" 
            }} />
          </div>

          <span style={{ color: "var(--accent-color)", fontWeight: "600", fontSize: "14px", letterSpacing: "1.5px", textTransform: "uppercase" }}>
            Question {step + 1} of {questions.length}
          </span>
          <h2 style={{ margin: "25px 0 45px 0", fontSize: "32px", color: "var(--text-primary)", fontWeight: "500" }}>
            {questions[step].question}
          </h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "15px" }}>
            {questions[step].options.map((opt, idx) => {
              const isSelected = answers[questions[step].id] === opt;
              return (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(opt)}
                  style={{
                    padding: "20px 30px",
                    background: isSelected ? "var(--accent-color)" : "var(--bg-primary)",
                    color: isSelected ? "white" : "var(--text-primary)",
                    border: `1px solid ${isSelected ? "var(--accent-color)" : "var(--border-light)"}`,
                    borderRadius: "15px",
                    fontSize: "17px",
                    fontWeight: isSelected ? "500" : "400",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    transition: "all 0.3s ease",
                    boxShadow: isSelected ? "var(--shadow-sm)" : "none"
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = "var(--accent-color)";
                      e.currentTarget.style.background = "var(--accent-light)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = "var(--border-light)";
                      e.currentTarget.style.background = "var(--bg-primary)";
                    }
                  }}
                >
                  {opt}
                  {isSelected && <FiCheckCircle size={22} />}
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="fade-in" style={{
          background: "var(--bg-secondary)",
          padding: "60px 40px",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-lg)",
          border: "1px solid var(--accent-light)",
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Decorative Background Blob */}
          <div style={{
            position: "absolute",
            top: "-50px",
            right: "-50px",
            width: "200px",
            height: "200px",
            background: "var(--accent-light)",
            borderRadius: "50%",
            filter: "blur(40px)",
            zIndex: 0
          }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: "36px", marginBottom: "15px", color: "var(--text-primary)", fontWeight: "600" }}>Your Perfect Routine</h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: "40px", fontSize: "16px", maxWidth: "500px", margin: "0 auto 40px auto" }}>
              We've crafted a personalized set of essentials designed specifically for your body and lifestyle.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "25px", textAlign: "left", marginBottom: "50px" }}>
              <div style={{ padding: "25px", background: "rgba(255, 255, 255, 0.8)", backdropFilter: "blur(10px)", borderRadius: "20px", border: "1px solid var(--accent-light)", boxShadow: "var(--shadow-sm)" }}>
                <span style={{ display: "inline-block", padding: "6px 12px", background: "var(--accent-light)", color: "var(--accent-hover)", borderRadius: "20px", fontSize: "12px", fontWeight: "600", marginBottom: "15px" }}>DAY CARE</span>
                <p style={{ fontSize: "16px", color: "var(--text-primary)", fontWeight: "500" }}>Organic Cotton Pads</p>
                <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginTop: "5px" }}>Medium Flow • Pack of 20</p>
              </div>
              <div style={{ padding: "25px", background: "rgba(255, 255, 255, 0.8)", backdropFilter: "blur(10px)", borderRadius: "20px", border: "1px solid var(--accent-light)", boxShadow: "var(--shadow-sm)" }}>
                <span style={{ display: "inline-block", padding: "6px 12px", background: "var(--accent-light)", color: "var(--accent-hover)", borderRadius: "20px", fontSize: "12px", fontWeight: "600", marginBottom: "15px" }}>NIGHT CARE</span>
                <p style={{ fontSize: "16px", color: "var(--text-primary)", fontWeight: "500" }}>Ultra-absorbent Overnights</p>
                <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginTop: "5px" }}>Heavy Protection • Pack of 10</p>
              </div>
              <div style={{ padding: "25px", background: "rgba(255, 255, 255, 0.8)", backdropFilter: "blur(10px)", borderRadius: "20px", border: "1px solid var(--accent-light)", boxShadow: "var(--shadow-sm)" }}>
                <span style={{ display: "inline-block", padding: "6px 12px", background: "var(--accent-light)", color: "var(--accent-hover)", borderRadius: "20px", fontSize: "12px", fontWeight: "600", marginBottom: "15px" }}>CLEANSE</span>
                <p style={{ fontSize: "16px", color: "var(--text-primary)", fontWeight: "500" }}>pH Balanced Wash</p>
                <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginTop: "5px" }}>Fragrance-free • 150ml</p>
              </div>
              <div style={{ padding: "25px", background: "rgba(255, 255, 255, 0.8)", backdropFilter: "blur(10px)", borderRadius: "20px", border: "1px solid var(--accent-light)", boxShadow: "var(--shadow-sm)" }}>
                <span style={{ display: "inline-block", padding: "6px 12px", background: "var(--accent-light)", color: "var(--accent-hover)", borderRadius: "20px", fontSize: "12px", fontWeight: "600", marginBottom: "15px" }}>COMFORT</span>
                <p style={{ fontSize: "16px", color: "var(--text-primary)", fontWeight: "500" }}>Soothing Heat Patches</p>
                <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginTop: "5px" }}>Natural relief • Pack of 3</p>
              </div>
            </div>

            <button style={{
              padding: "18px 40px",
              background: "var(--accent-color)",
              color: "white",
              border: "none",
              borderRadius: "30px",
              fontSize: "18px",
              fontWeight: "600",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              boxShadow: "var(--shadow-md)",
              transition: "transform 0.2s, background 0.3s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.background = "var(--accent-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "var(--accent-color)";
            }}>
              Add Bundle to Cart <FiArrowRight size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductQuiz;
