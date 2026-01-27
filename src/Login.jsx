function Login({ onLogin }) {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0fefe", // light teal background
        fontFamily: "'Poppins', sans-serif", // modern font
      }}
    >
      <div
        style={{
          width: "450px",
          padding: "45px",
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
          textAlign: "center",
        }}
      >
        {/* Heading */}
        <h1
          style={{
            color: "#008080",
            fontSize: "28px",
            marginBottom: "10px",
            fontWeight: "600",
          }}
        >
          Welcome to Wellora
        </h1>

        <p style={{ color: "#666", marginBottom: "25px" }}>
          Your trusted hygiene care store
        </p>

        {/* Inputs */}
        <input
          type="email"
          placeholder="Email"
          style={{
            width: "100%",
            padding: "12px",
            margin: "12px 0",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "15px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "12px",
            margin: "12px 0",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "15px",
          }}
        />

        {/* Button */}
        <button
          onClick={onLogin}
          style={{
            width: "100%",
            padding: "14px",
            background: "#008080",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "600",
            marginTop: "20px",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
