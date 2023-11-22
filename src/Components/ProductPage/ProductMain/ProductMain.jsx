import { Container, Button, Typography } from "@mui/material";
import Banner from "../../Banner/Banner.jsx";
import SeletorQtd from "../SeletorQtd/SeletorQtd.jsx";
import { useState } from "react";

export default function ProductMain({ produto }) {
  const [quantidade, setQuantidade] = useState("");

  function handleClick(qtd) {
    console.log(qtd.seletor);
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
            R$ {produto.preco}
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
