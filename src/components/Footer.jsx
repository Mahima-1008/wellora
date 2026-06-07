import { FaInstagram, FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#fafafa",
        borderTop: "1px solid #ddd",
        marginTop: "60px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          padding: "50px 80px",
          gap: "50px",
        }}
      >
        <div>
          <h4>HELP</h4>
          <p>Customer Support</p>
          <p>FAQ</p>
          <p>Shipping Information</p>
          <p>Returns</p>
          <p>Track Order</p>
        </div>

        <div>
          <h4>SERVICES</h4>
          <p>Women's Wellness</p>
          <p>Period Care</p>
          <p>Maternity Care</p>
          <p>Personal Hygiene</p>
          <p>Health Essentials</p>
        </div>

        <div>
          <h4>ABOUT WELLORA</h4>
          <p>Our Story</p>
          <p>Women's Health</p>
          <p>Sustainability</p>
          <p>Blog</p>
          <p>Careers</p>
        </div>

        <div>
          <h4>CONNECT</h4>

          <p>
            Subscribe for updates, offers and women's wellness tips.
          </p>

          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "20px",
              fontSize: "24px",
            }}
          >
            <FaInstagram />
<FaLinkedin />
          </div>
        </div>
      </div>

      <hr />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "30px 80px",
        }}
      >
        <div>
          <h4>India</h4>

          <p>
            Wellora Women's Wellness Store
            <br />
            Mumbai, Maharashtra
            <br />
            India
          </p>
        </div>

        <div>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Cookies</p>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          paddingBottom: "40px",
        }}
      >
        <h1
          style={{
            letterSpacing: "5px",
            fontWeight: "500",
          }}
        >
          WELLORA
        </h1>
      </div>
    </footer>
  );
}

export default Footer;