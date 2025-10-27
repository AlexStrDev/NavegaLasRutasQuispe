import { type FC } from "react";
import { Loader2 } from "lucide-react";
import styles from "./Loading.module.css";

const Loading: FC = () => {
  return (
    <div className={styles.container}>
      <Loader2 size={48} className={styles.spinner} />
      <p className={styles.text}>Cargando productos...</p>
    </div>
  );
};

export default Loading;