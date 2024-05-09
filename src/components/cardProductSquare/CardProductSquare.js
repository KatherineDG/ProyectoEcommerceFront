import React from "react";
import "./CardProductSquare.css";

function CardProductSquare({
  urlImage,
  nameProduct,
  priceLastProduct,
  priceNowProduct,
  inDiscount,
  porcentageDiscount,
}) {

  return (
    <div>
      {inDiscount ? (
        <div>
          <div className="discount-deco-square">{porcentageDiscount}% OFF</div>
          <div className="card-square">
            <img className="image-product-square" src={urlImage} alt="zapato" />
            <p className="name-product-square data-product-home-square">{nameProduct}</p>
            <div className="data-product-discount-square">
              <p className="price-last-product-square data-product-home-square">
                {priceLastProduct}
              </p>
              <p className="price-product-square data-product-home-square">
                {priceNowProduct}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="card-square">
            <img className="image-product-square" src={urlImage} alt="zapato" />
            <p className="name-product-square data-product-home-square">{nameProduct}</p>
            <p className="price-product-square data-product-home-square">{priceNowProduct}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardProductSquare;
