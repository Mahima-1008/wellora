import { useState } from "react";
import { useParams } from "react-router-dom";
import { FiShoppingBag, FiCheck } from "react-icons/fi";
import { products } from "../data/products";

function CategoryPage() {
  const { category } = useParams();
  const [addedItems, setAddedItems] = useState({});

  const filteredProducts = products.filter(
    (item) => item.category === category
  );

  const handleAddToCart = (id) => {
    setAddedItems({ ...addedItems, [id]: true });
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };

  // Helper to get an image based on sub-category
  const getImage = (sub) => {
    const images = {
      "Sanitary Pads": "https://images.unsplash.com/photo-1616259074069-56321f6cba93?w=500&q=80",
      "Tampons": "https://images.unsplash.com/photo-1647416390190-67a6e119424c?w=500&q=80",
      "Menstrual Cups": "https://images.unsplash.com/photo-1598502391219-5d666d9294e0?w=500&q=80",
      "Intimate Wash": "https://images.unsplash.com/photo-1608248593876-0ce6178305de?w=500&q=80",
      "Soap": "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=500&q=80",
      "Shampoo": "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500&q=80",
      "Lotions": "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=500&q=80"
    };
    // Default fallback image
    return images[sub] || "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&q=80";
  };

  return (
    <div className="fade-in" style={{ padding: "60px 20px", maxWidth: "1400px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ fontSize: "36px", color: "var(--text-primary)", fontWeight: "600", marginBottom: "10px" }}>{category}</h1>
        <p style={{ color: "var(--text-secondary)" }}>Curated essentials for your daily routine.</p>
      </div>

      {filteredProducts.length === 0 ? (
        <div style={{ textAlign: "center", padding: "50px", color: "var(--text-secondary)" }}>
          No products found in this category.
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "35px",
          }}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border-light)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                boxShadow: "var(--shadow-sm)",
                transition: "all 0.3s ease",
                display: "flex",
                flexDirection: "column",
                position: "relative"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "var(--shadow-sm)";
              }}
            >
              <div style={{ height: "220px", overflow: "hidden", position: "relative", background: "#f8f8f8" }}>
                <img 
                  src={getImage(product.sub)} 
                  alt={product.name} 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                />
                <span style={{ 
                  position: "absolute", 
                  top: "15px", 
                  left: "15px", 
                  background: "rgba(255,255,255,0.9)", 
                  padding: "4px 10px", 
                  borderRadius: "20px", 
                  fontSize: "12px", 
                  fontWeight: "500",
                  color: "var(--accent-hover)"
                }}>
                  {product.sub}
                </span>
              </div>
              
              <div style={{ padding: "25px", display: "flex", flexDirection: "column", flex: 1 }}>
                <h3 style={{ fontSize: "18px", color: "var(--text-primary)", fontWeight: "500", marginBottom: "10px", lineHeight: "1.4" }}>
                  {product.name}
                </h3>
                
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: "15px", borderTop: "1px solid var(--border-light)" }}>
                  <p style={{ fontSize: "20px", fontWeight: "600", color: "var(--text-primary)" }}>
                    ₹{product.price}
                  </p>
                  
                  <button
                    onClick={() => handleAddToCart(product.id)}
                    style={{
                      background: addedItems[product.id] ? "var(--accent-color)" : "var(--bg-primary)",
                      color: addedItems[product.id] ? "white" : "var(--text-primary)",
                      border: `1px solid ${addedItems[product.id] ? "var(--accent-color)" : "var(--border-light)"}`,
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      boxShadow: addedItems[product.id] ? "var(--shadow-sm)" : "none"
                    }}
                    onMouseEnter={(e) => {
                      if (!addedItems[product.id]) {
                        e.currentTarget.style.background = "var(--text-primary)";
                        e.currentTarget.style.color = "white";
                        e.currentTarget.style.borderColor = "var(--text-primary)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!addedItems[product.id]) {
                        e.currentTarget.style.background = "var(--bg-primary)";
                        e.currentTarget.style.color = "var(--text-primary)";
                        e.currentTarget.style.borderColor = "var(--border-light)";
                      }
                    }}
                  >
                    {addedItems[product.id] ? <FiCheck size={18} /> : <FiShoppingBag size={18} />}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryPage;