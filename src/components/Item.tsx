import { type FC } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../data/products";

interface ItemProps {
  product: Product;
}

const Item: FC<ItemProps> = ({ product }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "16px",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        transition: "transform 0.2s, box-shadow 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div
        style={{
          width: "100%",
          height: "200px",
          backgroundColor: "#f5f5f5",
          borderRadius: "8px",
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

      <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
        <h3
          style={{
            margin: 0,
            fontSize: "18px",
            fontWeight: "600",
            color: "#333",
          }}
        >
          {product.name}
        </h3>

        <p
          style={{
            margin: 0,
            fontSize: "14px",
            color: "#666",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {product.description}
        </p>

        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "12px" }}>
          <p
            style={{
              margin: 0,
              fontSize: "24px",
              fontWeight: "bold",
              color: "#007bff",
            }}
          >
            ${product.price.toFixed(2)}
          </p>

          <Link
            to={`/item/${product.id}`}
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "600",
              textDecoration: "none",
              textAlign: "center",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#0056b3";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#007bff";
            }}
          >
            Ver Detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;