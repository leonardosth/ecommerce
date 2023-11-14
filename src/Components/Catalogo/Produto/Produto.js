import "./Produto.css";

export default function Produto(produto) {
  return (
    <div className="card">
      <div className="imgConteiner">
        <img src={produto.imagem} alt={produto.altText}></img>
      </div>
      <div className="infoConteiner">
        <p>{produto.nome}</p>
        <span>cód. {produto.codigo}</span>
        <button className="buttonCompra">Comprar</button>
      </div>
    </div>
  );
}
