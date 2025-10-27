import { type FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loading from "./Loading";
import { getProducts } from "../services/productService";
import type { Product } from "../data/products";

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
    <div style={{ minHeight: "calc(100vh - 100px)" }}>
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "40px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#333",
            marginBottom: "8px",
          }}
        >
          {getCategoryTitle()}
        </h1>
        <p style={{ color: "#666", fontSize: "16px", marginBottom: "32px" }}>
          Descubre nuestra selección de productos de alta calidad
        </p>

        {loading ? <Loading /> : <ItemList products={products} />}
      </div>
    </div>
  );
};

export default ItemListContainer;