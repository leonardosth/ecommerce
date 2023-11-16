import Produto from "./Produto/Produto.js";
import img1 from "../../Assets/dualsense.webp";
import img2 from "../../Assets/headset.webp";
import Grid from "@mui/material/Unstable_Grid2";

export default function Catalogo() {
  const produtos = [
    {
      imagem: img1,
      altText: "placeholder",
      nome: "Produto 1",
      codigo: "test1",
    },
    {
      imagem: img2,
      altText: "placeholder",
      nome: "Produto 2",
      codigo: "test2",
    },
  ];
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {produtos.map((prod) => {
        return (
          <Grid xs={12} sm={3}>
            <Produto
              imagem={prod.imagem}
              altText={prod.altText}
              nome={prod.nome}
              codigo={prod.codigo}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
