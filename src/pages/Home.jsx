import HeroSlider from "../components/HeroSlider";
import CategoryCard from "../components/CategoryCard";

import periodCare from "../assets/categories/period-care.jpg";
import oralHygiene from "../assets/categories/oral-hygiene.jpg";
import maternity from "../assets/categories/maternity.jpg";

function Home() {
  const categories = [
    { name: "Period Care", image: periodCare, slug: "period-care" },
    { name: "Oral Hygiene", image: oralHygiene, slug: "oral-hygiene" },
    { name: "Maternity Care", image: maternity, slug: "maternity-care" },
  ];

  return (
    <div className="fade-in">
      <HeroSlider />

      <div style={{ padding: "60px 20px", maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "32px", color: "var(--text-primary)", fontWeight: "600", letterSpacing: "1px" }}>Shop Essentials</h2>
          <p style={{ color: "var(--text-secondary)", marginTop: "10px" }}>Curated categories for your daily wellness needs</p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
            justifyContent: "center"
          }}
        >
          {categories.map((cat) => (
            <CategoryCard
              key={cat.name}
              name={cat.name}
              image={cat.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;