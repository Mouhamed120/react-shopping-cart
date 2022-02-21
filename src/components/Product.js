import React from "react";
import formatCurrency from "../util";

function Product(props) {
  console.log(props.product);

  return (
    <div>
      <ul className="products">
        {props.product.map((product) => {
          const { _id, image, title, price } = product;
          return (
            <li key={_id}>
              <div className="product">
                <a href={"#" + _id}>
                  <img src={image} alt={title} />
                  <p className="title">{title}</p>
                </a>
                <div className="product-price">
                  <div>{formatCurrency(price)}</div>
                  <button className="button primary">Add to cart</button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Product;
