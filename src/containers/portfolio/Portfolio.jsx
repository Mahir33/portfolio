import React from "react";
import HeaderContent from "../../components/headerContent/HeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";

import QuoteGeneratorApp from "../../images/quote-gen-app.png";
import MIUnitConverter from "../../images/metric-imperial-unit-converter.png";
// import ImageTwo from "../../images/image2.jpg";
// import ImageThree from "../../images/image3.jpg";
// import ImageFour from "../../images/image4.jpg";
// import ImageFive from "../../images/image5.jpg";

import "./portfolio.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "Metric/Imperial Unit Converter",
    image: MIUnitConverter,
    source: "https://github.com/Mahir33/p-metric-imperial-unit-converter",
    live: "https://mahir33.github.io/p-metric-imperial-unit-converter/",
  },
  {
    id: 2,
    name: "Quote Generator App",
    source: "https://github.com/Mahir33/p-quote-generator",
    image: QuoteGeneratorApp,
    live: "https://mahir33.github.io/p-quote-generator/",
  },
  // {
  //   id: 2,
  //   name: "Supplier Design",
  //   image: ImageThree,
  //   link: "",
  // },
  // {
  //   id: 2,
  //   name: "Todo App",
  //   image: ImageFour,

  //   link: "",
  // },
  // {
  //   id: 3,
  //   name: "Shopping cart design",
  //   image: ImageFive,
  //   link: "",
  // },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

function Portfolio() {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredValue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <HeaderContent
        headerText="Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredValue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href="https://github.com/Mahir33">
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button onClick={() => window.open(item.live, "_blank")}>
                      Demo
                    </button>
                    <button onClick={() => window.open(item.source, "_blank")}>
                      Source
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
