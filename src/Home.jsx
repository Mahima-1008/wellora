import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div className="products">
  <div className="card">
    <h3>Sanitary Pads</h3>
    <p>₹120</p>
    <button>Buy Now</button>
  </div>

  <div className="card">
    <h3>Menstrual Cup</h3>
    <p>₹399</p>
    <button>Buy Now</button>
  </div>

  <div className="card">
    <h3>Panty Liners</h3>
    <p>₹99</p>
    <button>Buy Now</button>
  </div>

  <div className="card">
    <h3>Reusable Cloth Pads</h3>
    <p>₹250</p>
    <button>Buy Now</button>
  </div>

  <div className="card">
    <h3>Period Pain Relief Roll-On</h3>
    <p>₹180</p>
    <button>Buy Now</button>
  </div>

  <div className="card">
    <h3>Intimate Wash</h3>
    <p>₹220</p>
    <button>Buy Now</button>
  </div>
</div>
<>
  
  <Footer />
</>

    </>
  );
}

export default Home;
