import { Link } from "react-router";
import styles from "./styles.module.css";
import Button from "../button/button";

const Header = () => {
  return (
    <header className={styles.headerOverlay}>
      <div className={"container" + " " + styles.header}>
        <Link className={styles.headerLogo} to={"/"}>
          Rick And Morty
        </Link>
        <nav>
          <Button variant="link" to={"/"}>
            Эпизоды
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
