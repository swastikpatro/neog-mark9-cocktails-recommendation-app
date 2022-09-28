import "./styles.css";
import data from "./data.js";
import { useState } from "react";

// Header
const Header = () => {
  return (
    <header className="header">
      <h1>Cocktails App</h1>
      <p>Checkout my favourite cocktails. Select a category to get started..</p>
    </header>
  );
};
// end of Header

// BtnContainer
const BtnContainer = ({ handleBtnClick }) => {
  const allBtns = [
    "All",
    ...new Set(
      data.map(({ category }) => {
        return category;
      })
    ),
  ];

  return (
    <section className="btn-container" onClick={(e) => handleBtnClick(e)}>
      {allBtns.map((btn, i) => {
        return (
          <span key={i} className="btn category-btn" data-btn={btn}>
            {btn}
          </span>
        );
      })}
    </section>
  );
};
// end of BtnContainer

// CoctailSection
const CocktailsSection = ({ productsToDisplay }) => {
  return (
    <section className="section cocktails">
      <div className="section-title">
        <h3 className="title">our cocktails</h3>
        <div className="title-underline"></div>
      </div>

      <div className="section-center cocktails-center">
        {/* single card */}
        {productsToDisplay.map((item, i) => {
          return (
            <article className="cocktail" key={i}>
              <div className="image-container">
                <img className="cocktail-img" src={item.image} alt="" />
                <span className="category">{item.category}</span>
              </div>

              <div className="cocktail-info">
                <h3 className="name">{item.name}</h3>
                <span className="rating">
                  {"⭐"} {item.rating} / 5
                </span>
              </div>

              <div className="cocktail-description">
                <p>{item.desc}</p>
              </div>
            </article>
          );
        })}

        {/* end of single card */}
      </div>
    </section>
  );
};
// end of CocktailSection

export default function App() {
  const [productsToShow, setProductsToShow] = useState([...data]);

  function handleClick(e) {
    if (!("btn" in e.target.dataset)) {
      return;
    }

    const btnClicked = e.target.dataset.btn;
    if (btnClicked === "All") {
      setProductsToShow((prevData) => [...data]);
      return;
    }
    const filteredArr = data.filter((item) => {
      return item.category === btnClicked;
    });

    setProductsToShow((prevData) => [...filteredArr]);
  }

  return (
    <div className="App">
      <Header />
      <BtnContainer handleBtnClick={handleClick} />
      <CocktailsSection productsToDisplay={productsToShow} />
    </div>
  );
}
