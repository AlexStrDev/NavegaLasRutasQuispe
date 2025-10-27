import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Store } from "lucide-react";

const NavBar = () => {
  const categories = [
    { id: "laptops", name: "Laptops" },
    { id: "smartphones", name: "Smartphones" },
    { id: "tablets", name: "Tablets" },
    { id: "accesorios", name: "Accesorios" },
  ];

  return (
    <nav
      style={{
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 20px",
        }}
      >
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
            color: "#333",
          }}
        >
          <Store size={32} color="#007bff" />
          <h1 style={{ margin: 0, fontSize: "24px", fontWeight: "700", color: "#333" }}>
            MiTienda
          </h1>
        </Link>

        <ul
          style={{
            display: "flex",
            gap: "8px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <NavLink
              to="/"
              end
              style={({ isActive }) => ({
                display: "block",
                padding: "8px 16px",
                textDecoration: "none",
                color: isActive ? "#007bff" : "#333",
                fontWeight: isActive ? "600" : "400",
                borderRadius: "8px",
                backgroundColor: isActive ? "#e3f2fd" : "transparent",
                transition: "all 0.2s",
              })}
            >
              Inicio
            </NavLink>
          </li>
          {categories.map((category) => (
            <li key={category.id}>
              <NavLink
                to={`/category/${category.id}`}
                style={({ isActive }) => ({
                  display: "block",
                  padding: "8px 16px",
                  textDecoration: "none",
                  color: isActive ? "#007bff" : "#333",
                  fontWeight: isActive ? "600" : "400",
                  borderRadius: "8px",
                  backgroundColor: isActive ? "#e3f2fd" : "transparent",
                  transition: "all 0.2s",
                })}
              >
                {category.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;