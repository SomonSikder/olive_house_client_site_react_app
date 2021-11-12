import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';

const Explore = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://infinite-retreat-54842.herokuapp.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container pt-5">
      <h3 className="text-center text-info my-5">All Your Needs</h3>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {products?.map((product) => (
          <SingleProduct key={product._id} product={product}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default Explore;
