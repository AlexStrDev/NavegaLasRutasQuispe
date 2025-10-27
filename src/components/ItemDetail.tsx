import { type FC } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Package } from "lucide-react";
import ItemCount from "./ItemCount";
import type { Product } from "../data/products";
import styles from "./ItemDetail.module.css";

interface ItemDetailProps {
  product: Product;
}

const ItemDetail: FC<ItemDetailProps> = ({ product }) => {
  const handleAddToCart = (quantity: number) => {
    console.log(`Agregando ${quantity} unidades de ${product.name} al carrito`);
    alert(`¡Agregaste ${quantity} unidades de ${product.name} al carrito!`);
  };

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.backLink}>
        <ArrowLeft size={20} />
        Volver al catálogo
      </Link>

      <div className={styles.grid}>
        <div className={styles.imageContainer}>
          <img src={product.image} alt={product.name} className={styles.image} />
        </div>

        <div className={styles.info}>
          <div>
            <span className={styles.category}>{product.category}</span>

            <h1 className={styles.title}>{product.name}</h1>

            <p className={styles.description}>{product.description}</p>
          </div>

          <div className={styles.stockInfo}>
            <Package size={24} color="#666" />
            <span className={styles.stockText}>
              <strong>Stock disponible:</strong> {product.stock} unidades
            </span>
          </div>

          <div className={styles.priceSection}>
            <p className={styles.price}>${product.price.toFixed(2)}</p>
          </div>

          <ItemCount stock={product.stock} initial={1} onAdd={handleAddToCart} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;