import { type FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loading from "./Loading";
import { getProducts } from "../services/productService";
import type { Product } from "../data/products";
import styles from "./ItemListContainer.module.css";

const ItemListContainer: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams<{ categoryId: string }>();

  useEffect(() => {
    setLoading(true);

    getProducts(categoryId)
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  const getCategoryTitle = () => {
    if (!categoryId) return "Todos los productos";

    const categoryNames: Record<string, string> = {
      laptops: "Laptops",
      smartphones: "Smartphones",
      tablets: "Tablets",
      accesorios: "Accesorios",
    };

    return categoryNames[categoryId] || categoryId;
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{getCategoryTitle()}</h1>
        <p className={styles.subtitle}>Descubre nuestra selección de productos de alta calidad</p>

        {loading ? <Loading /> : <ItemList products={products} />}
      </div>
    </div>
  );
};

export default ItemListContainer;