import { Link } from "react-router-dom";

function CategoryCard({ name, image }) {
  return (
    <Link
      to={`/category/${name}`}
      style={{
        textDecoration: "none",
        color: "black",
      }}
    >
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "15px",
          overflow: "hidden",
          background: "white",
          cursor: "pointer",
        }}
      >
        <img
          src={image}
          alt={name}
          style={{
            width: "100%",
            height: "220px",
            objectFit: "cover",
          }}
        />

        <h3
          style={{
            textAlign: "center",
            padding: "15px",
          }}
        >
          {name}
        </h3>
      </div>
    </Link>
  );
}

export default CategoryCard;