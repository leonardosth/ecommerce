import { Container, Button, Typography } from "@mui/material";
import Banner from "../../Banner/Banner.jsx";
import SeletorQtd from "../SeletorQtd/SeletorQtd.jsx";
import { useState } from "react";

export default function ProductMain({ pedido, setPedido, produto }) {
  const [quantidade, setQuantidade] = useState("");

  function handleClick(qtd) {
    if (pedido === "fechado") {
      setPedido("aberto");
    }
    const produto_pedido = {
      produto_id: parseInt(produto.id),
      quantidade: parseInt(qtd.seletor),
      preco: parseFloat(produto.preco),
    };

    async function enviaProdutoCarrinho() {
      try {
        console.log(JSON.stringify(produto_pedido));
        let response = await fetch("http://localhost:5000/produto_pedido/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(produto_pedido),
        });
        let data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Erro ao enviar produtos:", error);
      }
    }

    enviaProdutoCarrinho();
  }

  return (
    <Container sx={{ display: "flex" }}>
      <Container sx={{ width: 345, objectFit: "contain" }}>
        <Banner
          carousel={[produto]}
          sx={{ objectFit: "contain", maxHeight: 200, maxWidth: "90%" }}
        />
      </Container>
      <Container>
        <Container>
          <Typography variant="h3">{produto.nome}</Typography>
          <Typography color="text.secondary">Cód. {produto.id}</Typography>
          <Typography variant="h5" color="text.primary">
            R$ {produto.preco.split(".").join(",")}
          </Typography>
        </Container>
        <Container>
          <SeletorQtd quantidade={quantidade} setQuantidade={setQuantidade} />
          <Button
            variant="contained"
            color="success"
            sx={{ width: 200 }}
            onClick={() => {
              handleClick(quantidade);
            }}
          >
            Comprar
          </Button>
        </Container>
      </Container>
    </Container>
  );
}
