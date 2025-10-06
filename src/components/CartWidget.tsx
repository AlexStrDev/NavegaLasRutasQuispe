import type { FC } from "react";
import { ShoppingCart } from "lucide-react";

const CartWidget: FC = () => {
  const itemCount: number = 3;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        cursor: "pointer",
      }}
    >
      <ShoppingCart size={22} />
      <span style={{ fontWeight: "bold" }}>{itemCount}</span>
    </div>
  );
};

export default CartWidget;
