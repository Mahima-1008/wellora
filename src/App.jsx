import { useState } from "react";
import Login from "./Login";
import Navbar from "./Navbar";
import Products from "./Products";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <>
          <Navbar
            onLogout={() => setIsLoggedIn(false)}
            onSearch={setSearchTerm}
            onCategoryChange={setSelectedCategory}
          />

          <Products
            searchTerm={searchTerm}
            selectedCategory={selectedCategory}
            addToCart={(item) => console.log("Added to cart:", item)}
          />
        </>
      )}
    </div>
  );
}

export default App;
