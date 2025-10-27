import { type FC, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";
import { getProductById } from "../services/productService";
import type { Product } from "../data/products";
import { AlertCircle } from "lucide-react";
import styles from "./ItemDetailContainer.module.css";

const ItemDetailContainer: FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams<{ itemId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!itemId) {
      navigate("/");
      return;
    }

    setLoading(true);

    getProductById(itemId)
      .then((data) => {
        if (data) {
          setProduct(data);
        } else {
          setProduct(null);
        }
      })
      .catch((error) => {
        console.error("Error al cargar el producto:", error);
        setProduct(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId, navigate]);

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return (
      <div className={styles.errorContainer}>
        <AlertCircle size={64} color="#dc3545" />
        <h2 className={styles.errorTitle}>Producto no encontrado</h2>
        <p className={styles.errorText}>El producto que buscas no existe o ha sido eliminado</p>
        <button onClick={() => navigate("/")} className={styles.errorButton}>
          Volver al catálogo
        </button>
      </div>
    );
  }

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;