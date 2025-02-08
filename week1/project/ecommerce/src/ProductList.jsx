import React from "react";

const ProductList = ({ products }) => {
  const cleanedProducts = products.map((product) => ({
    ...product,
    title: product.title.replace("FAKE: ", ""), 
  }));

  return (
    <div className="product-list">
      {cleanedProducts.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          <h3 className="product-title">{product.title}</h3>
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
