import logo from "../assets/logo.jpeg";
function Navbar({ onLogout, onSearch, onCategoryChange }) {
  const categories = [
    "All",
    "Period Care",
    "Intimate Hygiene",
    "Personal Hygiene",
    "Oral Hygiene",
    "Hair Care",
    "Shaving & Grooming",
    "Maternity",
    "Toilet & Bathroom Hygiene",
    "Health & Protective Hygiene",
    "Eco Friendly",
  ];

  return (
    <div
      style={{
        background: "#ffffff",
        borderBottom: "1px solid #e5e5e5",
        padding: "15px 40px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left Side */}
        <div
          style={{
            display: "flex",
            gap: "25px",
            alignItems: "center",
          }}
        >
          <span style={{ cursor: "pointer", fontSize: "22px" }}>☰</span>

          <select
            onChange={(e) => onCategoryChange(e.target.value)}
            style={{
              border: "none",
              background: "white",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            {categories.map((cat, index) => (
              <option key={index}>{cat}</option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Search Products"
            onChange={(e) => onSearch(e.target.value)}
            style={{
              padding: "10px",
              width: "250px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          />
        </div>

        {/* Center Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img
            src={logo}
            alt="Wellora"
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
            }}
          />

          <h1
            style={{
              margin: 0,
              fontSize: "34px",
              letterSpacing: "4px",
              fontWeight: "500",
            }}
          >
            WELLORA
          </h1>
        </div>

        {/* Right Side */}
        <div
          style={{
            display: "flex",
            gap: "25px",
            alignItems: "center",
          }}
        >
          <span style={{ cursor: "pointer" }}>♡</span>
          <span style={{ cursor: "pointer" }}>👤</span>

          <button
            onClick={onLogout}
            style={{
              background: "#008080",
              color: "white",
              border: "none",
              padding: "10px 18px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;