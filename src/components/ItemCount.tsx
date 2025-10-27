import { type FC, useState } from "react";
import { Minus, Plus } from "lucide-react";

interface ItemCountProps {
  stock: number;
  initial: number;
  onAdd: (quantity: number) => void;
}

const ItemCount: FC<ItemCountProps> = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    if (count > 0 && count <= stock) {
      onAdd(count);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "280px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "2px solid #ddd",
          borderRadius: "8px",
          padding: "8px 12px",
          backgroundColor: "#fff",
        }}
      >
        <button
          onClick={handleDecrement}
          disabled={count <= 1}
          style={{
            border: "none",
            background: "none",
            cursor: count <= 1 ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            opacity: count <= 1 ? 0.4 : 1,
            padding: "4px",
          }}
        >
          <Minus size={20} />
        </button>
        
        <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "40px", textAlign: "center" }}>
          {count}
        </span>
        
        <button
          onClick={handleIncrement}
          disabled={count >= stock}
          style={{
            border: "none",
            background: "none",
            cursor: count >= stock ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            opacity: count >= stock ? 0.4 : 1,
            padding: "4px",
          }}
        >
          <Plus size={20} />
        </button>
      </div>

      <button
        onClick={handleAdd}
        disabled={stock === 0}
        style={{
          backgroundColor: stock === 0 ? "#ccc" : "#007bff",
          color: "#fff",
          border: "none",
          padding: "12px 24px",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "600",
          cursor: stock === 0 ? "not-allowed" : "pointer",
          transition: "background-color 0.2s",
        }}
        onMouseEnter={(e) => {
          if (stock > 0) {
            e.currentTarget.style.backgroundColor = "#0056b3";
          }
        }}
        onMouseLeave={(e) => {
          if (stock > 0) {
            e.currentTarget.style.backgroundColor = "#007bff";
          }
        }}
      >
        {stock === 0 ? "Sin stock" : "Agregar al carrito"}
      </button>
      
      <p style={{ fontSize: "14px", color: "#666", margin: 0 }}>
        Stock disponible: {stock} unidades
      </p>
    </div>
  );
};

export default ItemCount;