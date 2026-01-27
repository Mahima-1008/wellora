import "./Auth.css";

function ForgotPassword({ onBack }) {
  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>

      <input
        type="email"
        placeholder="Enter your registered email"
      />

      <button>Send Reset Link</button>

      <p
        style={{ marginTop: "15px", color: "#008080", cursor: "pointer" }}
        onClick={onBack}
      >
        ← Back to Login
      </p>
    </div>
  );
}

export default ForgotPassword;
