import { type FC } from "react";
import { Loader2 } from "lucide-react";

const Loading: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "400px",
        gap: "16px",
      }}
    >
      <Loader2
        size={48}
        style={{
          animation: "spin 1s linear infinite",
          color: "#007bff",
        }}
      />
      <p style={{ fontSize: "18px", color: "#666" }}>Cargando productos...</p>
      
      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;