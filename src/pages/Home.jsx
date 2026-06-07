
import HeroSlider from "../components/HeroSlider";
import CategoryCard from "../components/CategoryCard";

import periodCare from "../assets/categories/period-care.jpg";
import oralHygiene from "../assets/categories/oral-hygiene.jpg";
import maternity from "../assets/categories/maternity.jpg";

function Home() {
  
   const categories = [
  {
    name: "Period Care",
    image: periodCare,
    slug: "period-care",
  },
  {
    name: "Oral Hygiene",
    image: oralHygiene,
    slug: "oral-hygiene",
  },
  {
    name: "Maternity Care",
    image: maternity,
    slug: "maternity-care",
  },
];
 

  return (
    <>
      <HeroSlider />

      <div style={{ padding: "40px" }}>
        <h2>Shop By Category</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5,1fr)",
            gap: "25px",
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
    </>
  );
}

export default Home;