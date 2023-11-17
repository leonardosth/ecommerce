import React, { useEffect, useState } from "react";
import Produto from "./Produto/Produto.js";
import Grid from "@mui/material/Unstable_Grid2";

function Catalogo() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        let response = await fetch("https://fakestoreapi.com/products", {
          method: "GET",
        });
        let data = await response.json();
        setProdutos(data);
      } catch (error) {
        console.error("Erro ao obter produtos:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {produtos.map((prod) => (
        <Grid key={prod.id} xs={12} sm={3}>
          <Produto
            imagem={prod.image}
            altText={prod.description}
            nome={prod.title}
            codigo={prod.id}
            preco={prod.price}
            categoria={prod.category}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default Catalogo;
