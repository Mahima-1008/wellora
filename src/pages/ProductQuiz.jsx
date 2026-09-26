import { useState } from "react";
import { FiArrowRight, FiCheck } from "react-icons/fi";

function ProductQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: "age",
      question: "What is your age group?",
      options: ["Teens (13-19)", "20s", "30s", "40s", "50+"]
    },
    {
      id: "flow",
      question: "How would you describe your typical flow?",
      options: ["Light", "Medium", "Heavy", "Variable"]
    },
    {
      id: "preferences",
      question: "Do you have sensitive skin or prefer organic products?",
      options: ["Yes, very sensitive", "Prefer organic/eco-friendly", "No specific preference"]
    }
  ];

  const handleOptionClick = (answer) => {
    setAnswers({ ...answers, [questions[step].id]: answer });
    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  return (
    <div style={{ padding: "60px 20px", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
      {!showResults ? (
        <div className="fade-in" key={step} style={{
          background: "var(--bg-secondary)",
          padding: "50px",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-sm)",
          border: "1px solid var(--border-light)"
        }}>
          <span style={{ color: "var(--accent-color)", fontWeight: "500", fontSize: "14px", letterSpacing: "1px" }}>
            QUESTION {step + 1} OF {questions.length}
          </span>
          <h2 style={{ margin: "20px 0 40px 0", fontSize: "28px", color: "var(--text-primary)" }}>
            {questions[step].question}
          </h2>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            {questions[step].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(opt)}
                style={{
                  padding: "18px 25px",
                  background: answers[questions[step].id] === opt ? "var(--text-primary)" : "transparent",
                  color: answers[questions[step].id] === opt ? "white" : "var(--text-secondary)",
                  border: `1px solid ${answers[questions[step].id] === opt ? "var(--text-primary)" : "var(--border-light)"}`,
                  borderRadius: "10px",
                  fontSize: "16px",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  transition: "all 0.2s"
                }}
                onMouseEnter={(e) => {
                  if (answers[questions[step].id] !== opt) {
                    e.currentTarget.style.borderColor = "var(--text-primary)";
                    e.currentTarget.style.color = "var(--text-primary)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (answers[questions[step].id] !== opt) {
                    e.currentTarget.style.borderColor = "var(--border-light)";
                    e.currentTarget.style.color = "var(--text-secondary)";
                  }
                }}
              >
                {opt}
                {answers[questions[step].id] === opt && <FiCheck />}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="fade-in" style={{
          background: "var(--bg-secondary)",
          padding: "50px",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-md)",
          border: "1px solid var(--border-light)"
        }}>
          <h2 style={{ fontSize: "32px", marginBottom: "15px", color: "var(--text-primary)" }}>Your Personalized Routine</h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "40px", fontSize: "16px" }}>
            Based on your answers, we've curated the perfect set of essentials for you.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", textAlign: "left", marginBottom: "40px" }}>
            <div style={{ padding: "20px", background: "var(--bg-primary)", borderRadius: "15px", border: "1px solid var(--border-light)" }}>
              <h4 style={{ marginBottom: "10px", color: "var(--text-primary)" }}>Day Care</h4>
              <p style={{ fontSize: "14px", color: "var(--text-secondary)" }}>Organic Cotton Pads (Medium Flow) - Pack of 20</p>
            </div>
            <div style={{ padding: "20px", background: "var(--bg-primary)", borderRadius: "15px", border: "1px solid var(--border-light)" }}>
              <h4 style={{ marginBottom: "10px", color: "var(--text-primary)" }}>Night Care</h4>
              <p style={{ fontSize: "14px", color: "var(--text-secondary)" }}>Ultra-absorbent Overnight Pads - Pack of 10</p>
            </div>
            <div style={{ padding: "20px", background: "var(--bg-primary)", borderRadius: "15px", border: "1px solid var(--border-light)" }}>
              <h4 style={{ marginBottom: "10px", color: "var(--text-primary)" }}>Intimate Wash</h4>
              <p style={{ fontSize: "14px", color: "var(--text-secondary)" }}>Fragrance-free pH Balanced Wash</p>
            </div>
            <div style={{ padding: "20px", background: "var(--bg-primary)", borderRadius: "15px", border: "1px solid var(--border-light)" }}>
              <h4 style={{ marginBottom: "10px", color: "var(--text-primary)" }}>Comfort</h4>
              <p style={{ fontSize: "14px", color: "var(--text-secondary)" }}>Soothing Heat Patches for Cramps</p>
            </div>
          </div>

          <button style={{
            padding: "16px 32px",
            background: "var(--accent-color)",
            color: "white",
            border: "none",
            borderRadius: "30px",
            fontSize: "16px",
            fontWeight: "500",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            boxShadow: "var(--shadow-sm)"
          }}>
            Add Bundle to Cart <FiArrowRight />
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductQuiz;
