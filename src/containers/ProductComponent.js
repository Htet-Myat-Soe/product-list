import React from 'react';
import { useSelector } from 'react-redux';

export const ProductComponent = () => {

  const products = useSelector((state) => state.allProducts.products);

  return (
      <>
         {
           products.map(p => (
            <a href={"/products/"+p.id}>
              <div className="flex flex-col bg-white rounded-md shadow-lg m-2" key={p.id}>
                <div className="h-72">
                  <img src={p.image} className='w-full h-full' alt="" />
                </div>
                <div className="flex flex-col items-start p-4">
                  <h4 className="text-md font-semibold">{p.title}</h4>
                  <p className="text-sm font-bold">$ {p.price}</p>
                  <a className="p-2 leading-none rounded mt-3 bg-gray-800 text-sm p-4 text-white uppercase" href="#">Add to cart</a>
                </div>
            </div>
            </a>
           ))
         }
      </>
  );
};
