import React from "react";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          <h3 className="product-title">
            {product.title.replace("FAKE: ", "")}
          </h3>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price}</p>
          <div className="rating">
            <span>{product.rating.rate} ★</span> ({product.rating.count}{" "}
            reviews)
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
