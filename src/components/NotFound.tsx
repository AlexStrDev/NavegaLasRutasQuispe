import { type FC } from "react";
import { useNavigate } from "react-router-dom";
import { Home, Search } from "lucide-react";

const NotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 100px)",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <Search size={80} color="#ccc" strokeWidth={1.5} />
      
      <h1
        style={{
          fontSize: "72px",
          fontWeight: "800",
          color: "#007bff",
          margin: "24px 0 16px 0",
        }}
      >
        404
      </h1>
      
      <h2
        style={{
          fontSize: "28px",
          fontWeight: "600",
          color: "#333",
          margin: "0 0 12px 0",
        }}
      >
        Página no encontrada
      </h2>
      
      <p
        style={{
          fontSize: "16px",
          color: "#666",
          maxWidth: "500px",
          margin: "0 0 32px 0",
          lineHeight: "1.6",
        }}
      >
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
        Verifica la URL o regresa al inicio.
      </p>
      
      <button
        onClick={() => navigate("/")}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          padding: "14px 28px",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "600",
          cursor: "pointer",
          transition: "background-color 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#0056b3";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#007bff";
        }}
      >
        <Home size={20} />
        Volver al inicio
      </button>
    </div>
  );
};

export default NotFound;