import { type FC } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Package } from "lucide-react";
import ItemCount from "./ItemCount";
import type { Product } from "../data/products";

interface ItemDetailProps {
  product: Product;
}

const ItemDetail: FC<ItemDetailProps> = ({ product }) => {
  const handleAddToCart = (quantity: number) => {
    console.log(`Agregando ${quantity} unidades de ${product.name} al carrito`);
    alert(`¡Agregaste ${quantity} unidades de ${product.name} al carrito!`);
  };

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px 20px",
      }}
    >
      <Link
        to="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          color: "#007bff",
          textDecoration: "none",
          marginBottom: "24px",
          fontSize: "16px",
        }}
      >
        <ArrowLeft size={20} />
        Volver al catálogo
      </Link>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          backgroundColor: "#fff",
          borderRadius: "16px",
          padding: "32px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        {/* Imagen del producto */}
        <div
          style={{
            width: "100%",
            height: "500px",
            backgroundColor: "#f5f5f5",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Información del producto */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div>
            <span
              style={{
                display: "inline-block",
                backgroundColor: "#e3f2fd",
                color: "#007bff",
                padding: "6px 12px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "12px",
                textTransform: "capitalize",
              }}
            >
              {product.category}
            </span>

            <h1
              style={{
                margin: "0 0 16px 0",
                fontSize: "32px",
                fontWeight: "700",
                color: "#333",
              }}
            >
              {product.name}
            </h1>

            <p
              style={{
                margin: 0,
                fontSize: "18px",
                color: "#666",
                lineHeight: "1.6",
              }}
            >
              {product.description}
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "16px",
              backgroundColor: "#f8f9fa",
              borderRadius: "8px",
            }}
          >
            <Package size={24} color="#666" />
            <span style={{ fontSize: "16px", color: "#666" }}>
              <strong>Stock disponible:</strong> {product.stock} unidades
            </span>
          </div>

          <div
            style={{
              borderTop: "2px solid #eee",
              borderBottom: "2px solid #eee",
              padding: "24px 0",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "40px",
                fontWeight: "bold",
                color: "#007bff",
              }}
            >
              ${product.price.toFixed(2)}
            </p>
          </div>

          <ItemCount stock={product.stock} initial={1} onAdd={handleAddToCart} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;