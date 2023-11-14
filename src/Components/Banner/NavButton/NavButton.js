import "./NavButton.css";

export default function NavButton(dir) {
  return (
    <button className="navButton" onClick={dir.handleCarousel}>
      {dir.dir === "right" ? ">" : "<"}
    </button>
  );
}
