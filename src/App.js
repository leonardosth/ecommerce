import { useState, useEffect } from "react";
import Navigation from "./Components/Navigation/Navigation.jsx";
import { Container } from "@mui/material";
import Catalogo from "./Components/Catalogo/Catalogo.jsx";
import Carrinho from "./Components/Carrinho/Carrinho.jsx";

function App() {
  const [pagina, setPagina] = useState(0);
  const [pedido, setPedido] = useState("fechado");
  const [produtos, setProdutos] = useState([]);

  const cardCarrinho = {
    display: { display: "flex" },
    showButton: false,
  };

  const cardCatalogo = {
    display: "",
    showButton: true,
  };

  function handleChange(event, newValue) {
    setPagina(newValue);
  }

  useEffect(() => {
    async function fetchPedidos() {
      try {
        let response = await fetch("http://localhost:5000/pedidos/", {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        });
        let data = await response.json();
        setPedido(data);
      } catch (error) {
        console.error("Erro ao obter pedidos:", error);
      }
    }

    fetchPedidos();
  }, []);

  return (
    <div className="App">
      <Container>
        <Navigation handleChange={handleChange} value={pagina} />
        {pagina === 0 ? (
          <Catalogo
            pedido={pedido}
            setPedido={setPedido}
            produtos={produtos}
            setProdutos={setProdutos}
            card={cardCatalogo}
          />
        ) : (
          <Carrinho pedido={pedido} produtos={produtos} card={cardCarrinho} />
        )}
      </Container>
    </div>
  );
}

export default App;
