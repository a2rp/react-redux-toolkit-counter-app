import { useEffect, useState } from "react";
import { FaCodepen, FaCoffee, FaEnvelope, FaFacebook, FaGithub, FaGlobe, FaHeart, FaLinkedin, FaPatreon, FaYoutube } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import Counter from "./components/counter";
import styles from "./styles.module.scss";

const links = [
  { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: FaGlobe },
  { label: "GitHub", href: "https://github.com/a2rp", icon: FaGithub },
  { label: "CodePen", href: "https://codepen.io/ash1198", icon: FaCodepen },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aashishranjan", icon: FaLinkedin },
  { label: "Facebook", href: "https://www.facebook.com/theash.ashish/", icon: FaFacebook },
  { label: "YouTube", href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", icon: FaYoutube },
  { label: "Email", href: "mailto:ash.ranjan09@gmail.com", icon: FaEnvelope },
  { label: "Support", href: "https://a2rp-donation-page.netlify.app/", icon: FaHeart },
  { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/a2rp", icon: FaCoffee },
  { label: "Patreon", href: "https://patreon.com/a2rp", icon: FaPatreon },
];

const App = () => {
  const [showGoTop, setShowGoTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowGoTop(window.scrollY > 420);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <a className={styles.brand} href="https://github.com/a2rp/react-redux-toolkit-counter-app" target="_blank" rel="noopener noreferrer">
          <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Ashish Ranjan logo" />
          <span>Adjustable Redux Counter</span>
        </a>
        <span className={styles.headerNote}>Choose your increment step</span>
      </header>
      <main className={styles.main}>
        <section className={styles.card}>
          <p className={styles.eyebrow}>Redux Toolkit</p>
          <h1>Count with control.</h1>
          <p className={styles.description}>Set a step value, then increment or decrement the shared Redux state.</p>
          <Counter />
        </section>
      </main>
      <footer className={styles.footer}>
        <p>Copyright &copy; {new Date().getFullYear()} <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></p>
        <nav aria-label="Links and support">
          {links.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} title={label} aria-label={label} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
              <Icon aria-hidden="true" />
            </a>
          ))}
        </nav>
      </footer>
      {showGoTop && <button className={styles.goTopButton} type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Go to top" title="Go to top"><FiArrowUp /></button>}
    </div>
  );
};

export default App;