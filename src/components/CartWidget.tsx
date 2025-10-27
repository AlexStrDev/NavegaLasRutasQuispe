import type { FC } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import styles from "./CartWidget.module.css";

const CartWidget: FC = () => {
  const itemCount: number = 3;

  return (
    <Link to="/cart" className={styles.cartLink}>
      <ShoppingCart size={22} />
      <span className={styles.badge}>{itemCount}</span>
    </Link>
  );
};

export default CartWidget;