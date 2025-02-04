import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = ({ activeCategory }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const url =
          activeCategory === "All"
            ? "https://fakestoreapi.com/products"
            : `https://fakestoreapi.com/products/category/${activeCategory}`;

        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [activeCategory]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    
    <div className="product-list">
    
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
