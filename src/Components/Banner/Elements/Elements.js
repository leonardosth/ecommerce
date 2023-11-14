import "./Elements.css";

export default function Elements(elemento) {
  return (
    <div>
      <img
        className={elemento.name}
        src={elemento.source}
        alt={elemento.altText}
        key={elemento.index}
      ></img>
    </div>
  );
}
