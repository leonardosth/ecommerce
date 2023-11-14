import { useState } from "react";
import image1 from "../../Assets/13_11-eBF-ofertas2-home-destaque-desk-c664114dac3a.webp";
import image2 from "../../Assets/desk_1250x313-14d9ef197596.webp";
import "./Banner.css";
import "./Elements/Elements.js";
import Elements from "./Elements/Elements.js";
import NavButton from "./NavButton/NavButton.js";

export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);

  const elementos = [
    {
      name: "",
      index: 0,
      source: image1,
      altText: "banner 1",
    },
    {
      name: "",
      index: 1,
      source: image2,
      altText: "banner 2",
    },
  ];

  let elem = elementos[activeIndex];

  function handleCarousel(e) {
    console.log(e);
    if (e.dir === "left") {
      console.log("left");
      elem.name = "sliderImg inactive";
      setActiveIndex(activeIndex - 1);
    }
  }

  return (
    <div className="sliderWrapper">
      <div className="navButton">
        <NavButton onClick={handleCarousel} dir="left" />
        <NavButton dir="right" />
      </div>
      <Elements
        name={(elem.name = "sliderImg active")}
        index={elem.index}
        source={elem.source}
        altText={elem.altText}
      />
    </div>
  );
}
