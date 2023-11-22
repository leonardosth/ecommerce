import { useState } from "react";
import Navigation from "./Components/Navigation/Navigation.jsx";
import { Container } from "@mui/material";
import Catalogo from "./Components/Catalogo/Catalogo.jsx";

function App() {
  const [pagina, setPagina] = useState(0);

  function handleChange(event, newValue) {
    setPagina(newValue);
  }

  return (
    <div className="App">
      <Container>
        <Navigation handleChange={handleChange} value={pagina} />
        <Catalogo />
      </Container>
    </div>
  );
}

export default App;
