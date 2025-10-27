import { type FC } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../data/products";
import styles from "./Item.module.css";

interface ItemProps {
  product: Product;
}

const Item: FC<ItemProps> = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.name} className={styles.image} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{product.name}</h3>

        <p className={styles.description}>{product.description}</p>

        <div className={styles.footer}>
          <p className={styles.price}>${product.price.toFixed(2)}</p>

          <Link to={`/item/${product.id}`} className={styles.detailButton}>
            Ver Detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;