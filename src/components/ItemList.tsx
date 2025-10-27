import { type FC } from "react";
import Item from "./Item";
import type { Product } from "../data/products";
import styles from "./ItemList.module.css";

interface ItemListProps {
  products: Product[];
}

const ItemList: FC<ItemListProps> = ({ products }) => {
  if (products.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <h3 className={styles.emptyText}>No se encontraron productos en esta categoría</h3>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;