import { useState } from "react";
import Navigation from "./Components/Navigation/Navigation.jsx";
import { Container } from "@mui/material";
import Catalogo from "./Components/Catalogo/Catalogo.jsx";
import Carrinho from "./Components/Carrinho/Carrinho.jsx";

function App() {
  const [pagina, setPagina] = useState(0);
  const [pedido, setPedido] = useState("fechado");

  function handleChange(event, newValue) {
    setPagina(newValue);
  }

  return (
    <div className="App">
      <Container>
        <Navigation handleChange={handleChange} value={pagina} />
        {pagina === 0 ? (
          <Catalogo pedido={pedido} setPedido={setPedido} />
        ) : (
          <Carrinho pedido={pedido} setPedido={setPedido} />
        )}
      </Container>
    </div>
  );
}

export default App;
