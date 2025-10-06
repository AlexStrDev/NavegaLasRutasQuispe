import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#f8f9fa",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <h1 style={{ margin: 0, color: "#333" }}>MiTienda</h1>
      <ul
        style={{
          display: "flex",
          gap: "20px",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li style={{ cursor: "pointer" }}>Inicio</li>
        <li style={{ cursor: "pointer" }}>Productos</li>
        <li style={{ cursor: "pointer" }}>Contacto</li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
