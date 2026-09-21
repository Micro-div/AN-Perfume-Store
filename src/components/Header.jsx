import { useState } from "react";
import styles from "./Header.module.css";

const NAV_LINKS = ["Home", "Shop", "About", "Journal", "Contact"];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="" className={styles.logoImage} />
        </div>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={styles.navLink}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <button className={styles.iconBtn} aria-label="Search">
            🔍
          </button>
          <button className={styles.iconBtn} aria-label="Cart">
            🛍️
          </button>
          <button
            className={styles.menuToggle}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
