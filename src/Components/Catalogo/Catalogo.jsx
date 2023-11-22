import React, { useEffect, useState } from "react";
import CatalogoGrid from "./CatalogoGrid/CatalogoGrid.jsx";
import ProductPage from "../ProductPage/ProductPage.jsx";
import Banner from "../Banner/Banner.jsx";
import image1 from "../../Assets/13_11-eBF-ofertas2-home-destaque-desk-c664114dac3a.webp";
import image2 from "../../Assets/desk_1250x313-14d9ef197596.webp";

function Catalogo() {
  const [produtos, setProdutos] = useState([]);
  const [prodIndex, setProdIndex] = useState(null);

  const bannerImages = [
    {
      nome: "Promoção Black Friday",
      image_url: image1,
    },
    {
      nome: "Cupom de desconto disponível",
      image_url: image2,
    },
  ];

  useEffect(() => {
    async function fetchProducts() {
      try {
        let response = await fetch("http://localhost:5000/produto/", {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        });
        let data = await response.json();
        setProdutos(data);
      } catch (error) {
        console.error("Erro ao obter produtos:", error);
      }
    }

    fetchProducts();
  }, []);

  function handleChange(indice) {
    setProdIndex(indice - 1);
  }

  if (prodIndex === null) {
    return (
      <div>
        <Banner carousel={bannerImages} />
        <CatalogoGrid listItens={produtos} handleChange={handleChange} />
      </div>
    );
  } else {
    return <ProductPage produto={produtos[prodIndex]} />;
  }
}

export default Catalogo;
