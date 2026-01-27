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
    "Eco Friendly"
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px 40px",
        backgroundColor: "#008080",
        color: "white",
      }}
    >
      {/* Logo */}
      <h2 style={{ margin: 0 }}>Wellora</h2>

      {/* Category + Search */}
      <div style={{ display: "flex", gap: "10px" }}>
        <select
          onChange={(e) => onCategoryChange(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "none",
            outline: "none",
          }}
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => onSearch(e.target.value)}
          style={{
            width: "300px",
            padding: "10px",
            borderRadius: "6px",
            border: "none",
            outline: "none",
          }}
        />
      </div>

      {/* Logout */}
      <button
        onClick={onLogout}
        style={{
          padding: "10px 18px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;
