import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import { ProductComponent } from './ProductComponent';

export const ProductListing = () => {

  const dispatch = useDispatch();
  const [isLoading,setIsLoading] = useState(true);


  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products")
                           .catch(e => console.log(e));
                           
    dispatch(setProducts(response.data));
    setIsLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  },[])

  return (
      <div className="container block mx-auto mt-5">
       <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 max-w-6xl mx-auto">
          {
            isLoading ? <div>is loading ....</div> : <ProductComponent />
          }
       </div>
      </div>
  );
};
