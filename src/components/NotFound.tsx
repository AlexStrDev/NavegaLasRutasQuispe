import { type FC } from "react";
import { useNavigate } from "react-router-dom";
import { Home, Search } from "lucide-react";
import styles from "./NotFound.module.css";

const NotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Search size={80} color="#ccc" strokeWidth={1.5} />

      <h1 className={styles.errorCode}>404</h1>

      <h2 className={styles.title}>Página no encontrada</h2>

      <p className={styles.description}>
        Lo sentimos, la página que estás buscando no existe o ha sido movida. Verifica la URL o
        regresa al inicio.
      </p>

      <button onClick={() => navigate("/")} className={styles.button}>
        <Home size={20} />
        Volver al inicio
      </button>
    </div>
  );
};

export default NotFound;