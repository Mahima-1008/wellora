import { useState, useEffect } from "react";

import slide1 from "../assets/hero/slide1.jpeg";
import slide2 from "../assets/hero/slide2.jpeg";
import slide3 from "../assets/hero/slide3.mp4";
import slide4 from "../assets/hero/slide4.jpg";
import slide5 from "../assets/hero/slide5.jpg";
import slide6 from "../assets/hero/slide6.jpeg";
import slide7 from "../assets/hero/slide7.jpeg";
import slide8 from "../assets/hero/slide8.jpeg";

function HeroSlider() {
  const slides = [
    { type: "image", src: slide1 },
    { type: "image", src: slide2 },
    { type: "video", src: slide3 },
    { type: "image", src: slide4 },
    { type: "image", src: slide5 },
    { type: "image", src: slide6 },
    { type: "image", src: slide7 },
    { type: "image", src: slide8 },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
  <div
    style={{
  width: "90%",
  maxWidth: "1200px",
  height: "500px",
  margin: "30px auto",
  background: "#ffffff",
  borderRadius: "20px",
  overflow: "hidden",
}}
  >
    {slides[current].type === "image" ? (
      <img
        src={slides[current].src}
        alt="Wellora Banner"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    ) : (
      <video
        src={slides[current].src}
        autoPlay
        muted
        loop
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    )}
  </div>
);
}

export default HeroSlider;