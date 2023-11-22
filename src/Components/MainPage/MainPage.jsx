import Banner from "../Banner/Banner.jsx";
import Catalogo from "../Catalogo/Catalogo.jsx";
import image1 from "../../Assets/13_11-eBF-ofertas2-home-destaque-desk-c664114dac3a.webp";
import image2 from "../../Assets/desk_1250x313-14d9ef197596.webp";

const bannerImages = [
  {
    label: "Promoção Black Friday",
    image: image1,
  },
  {
    label: "Cupom de desconto disponível",
    image: image2,
  },
];

export default function MainPage() {
  return (
    <div>
      <Banner carousel={bannerImages} />
      <Catalogo />
    </div>
  );
}
