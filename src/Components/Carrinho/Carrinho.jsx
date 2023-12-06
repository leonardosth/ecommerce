import { Container } from "@mui/material";
import { useEffect } from "react";

export default function Carrinho({ pedido, setPedido }) {
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
        console.error("Erro ao obter produtos:", error);
      }
    }

    fetchPedidos();
  }, []);

  console.log(pedido);

  return (
    <Container>
      <p>Carrinho</p>
    </Container>
  );
}
