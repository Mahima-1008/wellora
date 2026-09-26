import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiHeart, FiUser, FiMenu, FiShoppingBag, FiCalendar, FiHelpCircle, FiMessageSquare } from "react-icons/fi";
import logo from "../assets/logo.jpeg";

function Navbar({ onLogout, onSearch, onCategoryChange }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Shop", path: "/" },
    { name: "Cycle Tracker", path: "/tracker", icon: <FiCalendar /> },
    { name: "Personal Quiz", path: "/quiz", icon: <FiHelpCircle /> },
    { name: "Community", path: "/community", icon: <FiMessageSquare /> },
  ];

  return (
    <div
      style={{
        background: scrolled ? "rgba(255, 255, 255, 0.9)" : "var(--bg-secondary)",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "none" : "1px solid var(--border-light)",
        boxShadow: scrolled ? "var(--shadow-sm)" : "none",
        padding: "15px 40px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Left Side */}
        <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
          <FiMenu
            style={{ cursor: "pointer", fontSize: "24px", color: "var(--text-primary)" }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          
          <nav style={{ display: "flex", gap: "25px", alignItems: "center" }}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "var(--text-secondary)",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                {link.icon && <span style={{ fontSize: "16px" }}>{link.icon}</span>}
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Center Logo */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <img
            src={logo}
            alt="Wellora"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
            }}
          />
          <h1
            style={{
              margin: 0,
              fontSize: "26px",
              letterSpacing: "3px",
              fontWeight: "600",
              color: "var(--text-primary)",
            }}
          >
            WELLORA
          </h1>
        </Link>

        {/* Right Side */}
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <FiSearch style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", color: "var(--text-secondary)" }} />
            <input
              type="text"
              placeholder="Search essentials..."
              onChange={(e) => onSearch && onSearch(e.target.value)}
              style={{
                padding: "10px 10px 10px 35px",
                width: "220px",
                border: "1px solid var(--border-light)",
                borderRadius: "30px",
                background: "var(--bg-primary)",
                fontSize: "13px",
                outline: "none",
                transition: "all 0.3s",
                fontFamily: "inherit",
              }}
              onFocus={(e) => {
                e.target.style.width = "260px";
                e.target.style.borderColor = "var(--accent-color)";
              }}
              onBlur={(e) => {
                e.target.style.width = "220px";
                e.target.style.borderColor = "var(--border-light)";
              }}
            />
          </div>

          <FiHeart style={{ cursor: "pointer", fontSize: "20px", color: "var(--text-primary)" }} />
          <FiShoppingBag style={{ cursor: "pointer", fontSize: "20px", color: "var(--text-primary)" }} />
          <FiUser style={{ cursor: "pointer", fontSize: "20px", color: "var(--text-primary)" }} />

          {onLogout && (
             <button
              onClick={onLogout}
              style={{
                background: "transparent",
                color: "var(--text-primary)",
                border: "1px solid var(--border-light)",
                padding: "8px 16px",
                borderRadius: "30px",
                cursor: "pointer",
                fontSize: "13px",
                fontWeight: "500",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--text-primary)";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--text-primary)";
              }}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;