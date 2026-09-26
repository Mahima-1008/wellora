import { FiBookmark, FiHeart, FiShare2, FiClock } from "react-icons/fi";

function Community() {
  const articles = [
    {
      title: "Understanding Your Cycle Phases",
      category: "Wellness",
      readTime: "5 min read",
      author: "Dr. Sarah Jenkins",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
      excerpt: "Learn how your energy levels and needs change throughout the four phases of your menstrual cycle."
    },
    {
      title: "The Ultimate Guide to Sustainable Period Care",
      category: "Eco-Friendly",
      readTime: "8 min read",
      author: "Emma Woods",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800",
      excerpt: "Making the switch to reusable and organic products is easier than you think. Here is everything you need to know."
    },
    {
      title: "Managing Cramps Naturally",
      category: "Health",
      readTime: "4 min read",
      author: "Wellora Experts",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
      excerpt: "From herbal teas to gentle stretches, discover natural ways to alleviate menstrual discomfort."
    }
  ];

  return (
    <div className="fade-in" style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ fontSize: "36px", color: "var(--text-primary)", marginBottom: "15px" }}>The Wellora Journal</h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "16px", maxWidth: "600px", margin: "0 auto" }}>
          Expert advice, community stories, and everything you need to know about taking care of yourself.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "30px" }}>
        {articles.map((article, index) => (
          <div key={index} style={{
            background: "var(--bg-secondary)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            boxShadow: "var(--shadow-sm)",
            border: "1px solid var(--border-light)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            cursor: "pointer"
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
            <div style={{ height: "240px", overflow: "hidden" }}>
              <img 
                src={article.image} 
                alt={article.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              />
            </div>
            
            <div style={{ padding: "25px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
                <span style={{ 
                  background: "var(--bg-primary)", 
                  padding: "6px 12px", 
                  borderRadius: "20px", 
                  fontSize: "12px", 
                  color: "var(--accent-color)",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>
                  {article.category}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "5px", color: "var(--text-secondary)", fontSize: "12px" }}>
                  <FiClock /> {article.readTime}
                </span>
              </div>

              <h3 style={{ fontSize: "20px", marginBottom: "10px", color: "var(--text-primary)", lineHeight: "1.4" }}>
                {article.title}
              </h3>
              
              <p style={{ color: "var(--text-secondary)", fontSize: "14px", marginBottom: "20px", lineHeight: "1.6" }}>
                {article.excerpt}
              </p>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--border-light)", paddingTop: "15px" }}>
                <span style={{ fontSize: "13px", color: "var(--text-primary)", fontWeight: "500" }}>By {article.author}</span>
                <div style={{ display: "flex", gap: "15px", color: "var(--text-secondary)" }}>
                  <FiHeart style={{ cursor: "pointer" }} />
                  <FiBookmark style={{ cursor: "pointer" }} />
                  <FiShare2 style={{ cursor: "pointer" }} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Community;
