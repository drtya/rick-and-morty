import { Link } from "react-router";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

const Header = () => {
  const [headerInvisible, setHeaderInvisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderInvisible(window.scrollY < 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={styles.headerOverlay}
      style={{ opacity: headerInvisible ? 0.8 : 1, transition: "opacity 0.3s" }}
    >
      <div className={"container" + " " + styles.header}>
        <Link className={styles.headerLogo} to={"/"}>
          Rick And Morty
        </Link>
        <nav>
          <Link className={styles.navigation} to={"/"}>
            Эпизоды
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
