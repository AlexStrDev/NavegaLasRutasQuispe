import { type FC, useState } from "react";
import { Minus, Plus } from "lucide-react";
import styles from "./ItemCount.module.css";

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
    <div className={styles.container}>
      <div className={styles.counter}>
        <button onClick={handleDecrement} disabled={count <= 1} className={styles.button}>
          <Minus size={20} />
        </button>

        <span className={styles.count}>{count}</span>

        <button onClick={handleIncrement} disabled={count >= stock} className={styles.button}>
          <Plus size={20} />
        </button>
      </div>

      <button onClick={handleAdd} disabled={stock === 0} className={styles.addButton}>
        {stock === 0 ? "Sin stock" : "Agregar al carrito"}
      </button>

      <p className={styles.stock}>Stock disponible: {stock} unidades</p>
    </div>
  );
};

export default ItemCount;