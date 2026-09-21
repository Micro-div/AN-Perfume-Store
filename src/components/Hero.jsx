import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

const SLIDES = ["/hero.jfif", "/hero1.jfif", "/hero2.jfif"];

function Hero() {
  const [current, setCurrent] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.hero} id="home">

      {/* ── SLIDESHOW ── */}
      {SLIDES.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Slide ${i + 1}`}
          className={`${styles.slide} ${i === current ? styles.active : ""}`}
        />
      ))}

      {/* ── OVERLAY: TEXT + BUTTON ── */}
      <div className={`${styles.overlay} ${scrolled ? styles.hidden : ""}`}>
        <span className={styles.eyebrow}></span>
        <h1 className={styles.headline}>
          <span className={styles.word}>
            <span className={styles.inner}>Luxury</span>
          </span>
          <span className={styles.word}>
            <span className={`${styles.inner} ${styles.gold}`}>Fragrances</span>
          </span>
          <span className={styles.word}>
            <span className={styles.inner}>For Every</span>
          </span>
          <span className={styles.word}>
            <span className={styles.inner}>Moment</span>
          </span>
        </h1>
        <p className={styles.sub}>
          Discover scents crafted for the extraordinary.
        </p>
        <a href="#shop" className={styles.cta}>Shop Now</a>
      </div>

      {/* ── DOTS ── */}
      <div className={styles.dots}>
        {SLIDES.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === current ? styles.activeDot : ""}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>

      {/* ── TICKER ── */}
      {/* <div className={styles.ticker}>
        <div className={styles.tickerTrack}>
          <span className={styles.t1}>Luxury Fragrances</span>
          <span className={styles.star}>✦</span>
          <span className={styles.t2}>New Arrivals</span>
          <span className={styles.star}>✦</span>
          <span className={styles.t3}>Exclusive Collection</span>
          <span className={styles.star}>✦</span>
          <span className={styles.t4}>AN Store</span>
          <span className={styles.star}>✦</span>
          <span className={styles.t2}>Premium Scents</span>
          <span className={styles.star}>✦</span>
          <span className={styles.t1}>Shop Now</span>
          <span className={styles.star}>✦</span>
          <span className={styles.t3}>Luxury Fragrances</span>
          <span className={styles.star}>✦</span>
          <span className={styles.t4}>New Arrivals</span>
          <span className={styles.star}>✦</span>
          <span className={styles.t1}>Exclusive Collection</span>
          <span className={styles.star}>✦</span>
          <span className={styles.t2}>AN Store</span>
          <span className={styles.star}>✦</span>
          <span className={styles.t3}>Premium Scents</span>
          <span className={styles.star}>✦</span>
          <span className={styles.t4}>Shop Now</span>
          <span className={styles.star}>✦</span>
        </div>
      </div> */}

    </section>
  );
}

export default Hero;