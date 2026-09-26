import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import CycleTracker from "./pages/CycleTracker";
import ProductQuiz from "./pages/ProductQuiz";
import Community from "./pages/Community";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar cartItemCount={cart.reduce((sum, item) => sum + item.qty, 0)} />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:category" element={<CategoryPage cart={cart} setCart={setCart} />} />
            <Route path="/tracker" element={<CycleTracker />} />
            <Route path="/quiz" element={<ProductQuiz />} />
            <Route path="/community" element={<Community />} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
            <Route path="/checkout" element={<Checkout total={cart.reduce((s, i) => s + i.price * i.qty, 0)} />} />
          </Routes>
        </main>

        <Footer />
        <Chatbot />
      </div>
    </BrowserRouter>
  );
}

export default App;