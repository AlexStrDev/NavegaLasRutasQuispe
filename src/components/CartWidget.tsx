import type { FC } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const CartWidget: FC = () => {
  const itemCount: number = 3;

  return (
    <Link
      to="/cart"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        cursor: "pointer",
        textDecoration: "none",
        color: "#333",
        padding: "8px 16px",
        borderRadius: "8px",
        transition: "background-color 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#f0f0f0";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
      }}
    >
      <ShoppingCart size={22} />
      <span
        style={{
          fontWeight: "bold",
          backgroundColor: "#007bff",
          color: "#fff",
          borderRadius: "50%",
          width: "24px",
          height: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "12px",
        }}
      >
        {itemCount}
      </span>
    </Link>
  );
};

export default CartWidget;