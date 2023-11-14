import Produto from "./Produto/Produto.js";
import img1 from "../../Assets/dualsense.webp";
import img2 from "../../Assets/headset.webp";
import "./Catalogo.css";

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
    <div className="catalogo">
      {produtos.map((prod) => {
        return (
          <Produto
            imagem={prod.imagem}
            altText={prod.altText}
            nome={prod.nome}
            codigo={prod.codigo}
          />
        );
      })}
    </div>
  );
}
