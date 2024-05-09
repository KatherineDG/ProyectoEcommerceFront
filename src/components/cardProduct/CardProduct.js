import React from "react";
import "./CardProduct.css";

function CardProduct({
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
          <div className="discount-deco">{porcentageDiscount}% OFF</div>
          <div className="card">
            <img className="image-product" src={urlImage} alt="zapato" />
            <p className="name-product data-product-home">{nameProduct}</p>
            <div className="data-product-discount">
              <p className="price-last-product data-product-home">
                {priceLastProduct}
              </p>
              <p className="price-product data-product-home">
                {priceNowProduct}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="card">
            <img className="image-product" src={urlImage} alt="zapato" />
            <p className="name-product data-product-home">{nameProduct}</p>
            <p className="price-product data-product-home">{priceNowProduct}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardProduct;
