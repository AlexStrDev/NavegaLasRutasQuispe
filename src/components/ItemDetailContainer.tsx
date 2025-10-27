import { type FC, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";
import { getProductById } from "../services/productService";
import type { Product } from "../data/products";
import { AlertCircle } from "lucide-react";

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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "400px",
          gap: "16px",
          padding: "40px 20px",
        }}
      >
        <AlertCircle size={64} color="#dc3545" />
        <h2 style={{ fontSize: "24px", color: "#333", margin: 0 }}>
          Producto no encontrado
        </h2>
        <p style={{ fontSize: "16px", color: "#666", margin: 0 }}>
          El producto que buscas no existe o ha sido eliminado
        </p>
        <button
          onClick={() => navigate("/")}
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            padding: "12px 24px",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            marginTop: "16px",
          }}
        >
          Volver al catálogo
        </button>
      </div>
    );
  }

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;