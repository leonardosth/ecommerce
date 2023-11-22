import { Container } from "@mui/material";
import Navigation from "../Navigation/Navigation.js";
import Banner from "../Banner/Banner.js";
import Catalogo from "../Catalogo/Catalogo.js";

export default function MainPage() {
  return (
    <Container>
      <Navigation />
      <Banner />
      <Catalogo />
    </Container>
  );
}
