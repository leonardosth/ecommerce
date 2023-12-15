import CardProduto from "../CardProduto/CardProduto.jsx";
import { Grid } from "@mui/material";

export default function CatalogoGrid({ listItens, handleChange, card }) {
  const produtos = listItens;

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {produtos.map((prod) => (
        <Grid key={prod.id} xs={12} sm={3} item={true}>
          <CardProduto item={prod} handleChange={handleChange} card={card} />
        </Grid>
      ))}
    </Grid>
  );
}
