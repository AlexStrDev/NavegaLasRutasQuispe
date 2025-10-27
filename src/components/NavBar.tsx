import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Store } from "lucide-react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const categories = [
    { id: "laptops", name: "Laptops" },
    { id: "smartphones", name: "Smartphones" },
    { id: "tablets", name: "Tablets" },
    { id: "accesorios", name: "Accesorios" },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <Store size={32} color="#007bff" />
          <h1 className={styles.logoTitle}>MiTienda</h1>
        </Link>

        <ul className={styles.menu}>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? `${styles.menuLink} ${styles.menuLinkActive}` : styles.menuLink
              }
            >
              Inicio
            </NavLink>
          </li>
          {categories.map((category) => (
            <li key={category.id}>
              <NavLink
                to={`/category/${category.id}`}
                className={({ isActive }) =>
                  isActive ? `${styles.menuLink} ${styles.menuLinkActive}` : styles.menuLink
                }
              >
                {category.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;