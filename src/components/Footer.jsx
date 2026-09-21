import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandCol}>
          <div className={styles.logo}>
            <span className={styles.logoMark}>AN</span>
            <span className={styles.logoWord}>STORE</span>
          </div>
          <p className={styles.tagline}>
            Something exceptional, made to last. Thank you for being part of our
            journey.
          </p>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Shop</h4>
          <a href="#" className={styles.link}>
            New Arrivals
          </a>
          <a href="#" className={styles.link}>
            Bestsellers
          </a>
          <a href="#" className={styles.link}>
            Accessories
          </a>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Support</h4>
          <a href="#" className={styles.link}>
            Contact Us
          </a>
          <a href="#" className={styles.link}>
            Shipping & Returns
          </a>
          <a href="#" className={styles.link}>
            FAQs
          </a>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Stay in Touch</h4>
          <p className={styles.linkMuted}>Follow along for the reveal.</p>
          <div className={styles.socials}>
            <a href="#" className={styles.socialBtn}>
              IG
            </a>
            <a href="#" className={styles.socialBtn}>
              FB
            </a>
            <a href="#" className={styles.socialBtn}>
              TT
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <span>© {new Date().getFullYear()} AN Store. All rights reserved.</span>
        <span className={styles.handle}>@an_store._1</span>
      </div>
    </footer>
  );
}

export default Footer;
