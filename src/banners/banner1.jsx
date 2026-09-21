import { useEffect, useRef, useState } from "react";
import styles from "./banner1.module.css";

function Banner() {
  const bannerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // only animate once
        }
      },
      { threshold: 0.4 } // triggers when 20% of banner is visible
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={bannerRef}
      className={`${styles.banner} ${isVisible ? styles.visible : ""}`}
    >
      <img
        src="/banner1.jfif"
        alt="AN Store Collection"
        className={styles.bannerImage}
      />
    </section>
  );
}

export default Banner;