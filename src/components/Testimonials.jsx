import { useState, useEffect } from "react";
import styles from "./Testimonials.module.css";

const REVIEWS = [
  {
    id: 1,
    name: "Amina R.",
    role: "Verified Buyer",
    quote:
      "The quality feels genuinely luxury — every piece I have ordered has been worth the wait. Packaging alone felt like a gift.",
    initial: "A",
  },
  {
    id: 2,
    name: "Sofia M.",
    role: "Verified Buyer",
    quote:
      "I was hesitant to order from a new store, but the fit and fabric exceeded what I expected from brands twice the price.",
    initial: "S",
  },
  {
    id: 3,
    name: "Hania K.",
    role: "Verified Buyer",
    quote:
      "Customer support was warm and quick, and the dress arrived exactly as pictured. This is my new go-to for occasion wear.",
    initial: "H",
  },
];

function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => setActive(index);
  const prev = () =>
    setActive((p) => (p - 1 + REVIEWS.length) % REVIEWS.length);
  const next = () => setActive((p) => (p + 1) % REVIEWS.length);

  const review = REVIEWS[active];

  return (
    <section className={`section ${styles.wrap}`} id="reviews">
      <span
        className="eyebrow-gold"
        style={{ display: "block", textAlign: "center" }}
      >
        Loved by Our Customers
      </span>
      <h2 className={styles.title}>What Women Are Saying</h2>

      <div className={styles.carousel}>
        <button
          className={styles.navBtn}
          onClick={prev}
          aria-label="Previous review"
        >
          ‹
        </button>

        <div className={styles.card}>
          <div className={styles.avatar}>{review.initial}</div>
          <p className={styles.quote}>&ldquo;{review.quote}&rdquo;</p>
          <div className={styles.stars}>★★★★★</div>
          <span className={styles.name}>{review.name}</span>
          <span className={styles.role}>{review.role}</span>
        </div>

        <button
          className={styles.navBtn}
          onClick={next}
          aria-label="Next review"
        >
          ›
        </button>
      </div>

      <div className={styles.dots}>
        {REVIEWS.map((r, i) => (
          <button
            key={r.id}
            className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to review ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
