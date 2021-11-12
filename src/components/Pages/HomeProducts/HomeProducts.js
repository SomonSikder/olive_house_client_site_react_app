import React, { useEffect, useState } from 'react';
import SingleProduct from '../Explore/SingleProduct';

const HomeProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://infinite-retreat-54842.herokuapp.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container text-center">
      <h3 className="text-info my-3">Best Saler</h3>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {products?.slice(0, 6).map((product) => (
          <SingleProduct key={product._id} product={product}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
