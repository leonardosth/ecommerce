import { Container, Typography } from "@mui/material";
import ProductNav from "./ProductNav/ProductNav.jsx";
import ProductMain from "./ProductMain/ProductMain.jsx";

export default function ProductPage({ produto }) {
  return (
    <Container>
      <ProductNav produto={produto} />
      <ProductMain produto={produto} />
      <Container>
        <Typography variant="subtitle1" color="text.primary">
          Descrição: {produto.descricao}
        </Typography>
      </Container>
    </Container>
  );
}
