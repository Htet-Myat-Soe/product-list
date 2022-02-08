import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import { ProductComponent } from './ProductComponent';

export const ProductListing = () => {

  const dispatch = useDispatch();
  const products = useSelector(state => state.allProducts.products);

  useEffect(() => {
    dispatch(fetchProducts());

  },[])

  return (
      <div className="container block mx-auto mt-5">
       <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 max-w-6xl mx-auto">
          {
           Object.keys(products).length === 0 ? <div>is loading ....</div> : <ProductComponent />
          }
       </div>
      </div>
  );
};
