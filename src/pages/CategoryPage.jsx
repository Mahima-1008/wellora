import { useParams } from "react-router-dom";
import { products } from "../data/products";

function CategoryPage() {
  const { category } = useParams();

  const filteredProducts = products.filter(
    (item) => item.category === category
  );

  return (
    <div style={{ padding: "40px" }}>
      <h1>{category}</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "25px",
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;