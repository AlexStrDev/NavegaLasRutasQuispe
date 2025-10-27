import { type FC } from "react";
import Item from "./Item";
import type { Product } from "../data/products";

interface ItemListProps {
  products: Product[];
}

const ItemList: FC<ItemListProps> = ({ products }) => {
  if (products.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "60px 20px" }}>
        <h3 style={{ color: "#666", fontSize: "20px" }}>
          No se encontraron productos en esta categoría
        </h3>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "24px",
        padding: "20px",
      }}
    >
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;