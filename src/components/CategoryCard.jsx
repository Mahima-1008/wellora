import { Link } from "react-router-dom";

function CategoryCard({ name, image }) {
  return (
    <Link
      to={`/category/${name}`}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          border: "1px solid var(--border-light)",
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
          background: "var(--bg-secondary)",
          cursor: "pointer",
          boxShadow: "var(--shadow-sm)",
          transition: "all 0.3s ease",
          height: "100%",
          display: "flex",
          flexDirection: "column"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-8px)";
          e.currentTarget.style.boxShadow = "var(--shadow-lg)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "var(--shadow-sm)";
        }}
      >
        <div style={{ overflow: "hidden", height: "240px" }}>
          <img
            src={image}
            alt={name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.5s ease"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          />
        </div>

        <h3
          style={{
            textAlign: "center",
            padding: "20px",
            fontSize: "18px",
            fontWeight: "500",
            color: "var(--text-primary)",
            margin: "0"
          }}
        >
          {name}
        </h3>
      </div>
    </Link>
  );
}

export default CategoryCard;