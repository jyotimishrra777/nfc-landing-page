import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setShowArrow(scrolled > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showArrow && (
      <div className="topArrow" onClick={scrollToTop}>
        <i className="bi bi-arrow-up fs-4 "></i>
      </div>
    )
  );
};

export default ScrollToTopButton;
