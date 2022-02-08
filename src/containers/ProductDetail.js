import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProduct, removeSelectedProducts } from '../redux/actions/productActions';

export const ProductDetail = () => {

    const {productId} = useParams();
    const dispatch = useDispatch();

    const product = useSelector(state => state.product);

    const {id, title, image, category, description, price} = product;


    useEffect(() => {
        if(productId && productId !== "" ) dispatch(fetchProduct(productId));
        return () => {
            dispatch(removeSelectedProducts());
        }

    },[productId])

  return (
      <>
        {
            !id ? (<div>
                    Loading....
            </div>)
            :  (<section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={image}/>
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">{category}</h2>
                    <h1 className="text-white text-3xl title-font font-medium my-4">{title}</h1>
                    <p className="leading-relaxed">{description}</p>
                    <div className="flex mt-2">
                    <span className="title-font font-medium text-2xl text-white">${price}</span>
                    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">ADD TO CART</button>
                    </div>
                </div>
                </div>
            </div>
        </section>)
        }
      </>
  );
};
