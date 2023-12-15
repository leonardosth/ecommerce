import { Container, Button } from "@mui/material";
import CardProduto from "../Catalogo/CardProduto/CardProduto.jsx";

export default function Carrinho({ card, pedido, produtos }) {
  return (
    <Container sx={{ display: "flex" }}>
      <Container>
        {pedido[0].produto_pedido.map((item_id) => (
          <CardProduto key={item_id} item={produtos[item_id]} card={card} />
        ))}
      </Container>
      <Container>
        <p>Pedido aberto</p>
        <p>Pedido #{pedido[0].id}</p>
        <p>Total: R${pedido[0].total_pedido}</p>
        <Button variant="contained" color="success">
          FINALIZAR COMPRA
        </Button>
      </Container>
    </Container>
  );
}
