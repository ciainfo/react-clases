import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"; 

const Navbar = () => {
  return(
    <nav>
      <ul className={styles.lista}>
        <li className={styles.item}>
          <Link to="/pages/Inicio" className={styles.link}>Inicio</Link>
          <Link to="/pages/Tecnologia" className={styles.link}>Tecnología</Link>
          <Link to="/pages/Vestimenta" className={styles.link}>Vestimenta</Link>
          
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;