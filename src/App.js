import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Banner from "./Components/Banner/Banner";
import Catalogo from "./Components/Catalogo/Catalogo";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <Catalogo />
    </div>
  );
}

export default App;
