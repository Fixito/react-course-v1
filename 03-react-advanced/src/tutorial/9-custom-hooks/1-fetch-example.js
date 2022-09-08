import React, { useState, useEffect } from 'react';
import { useFetch } from './2-useFetch';

const url = 'https://course-api.com/javascript-store-products';

//* un custom hook nous permet de réutiliser une fonctionnalité (fetch des données, sauvegarder dans le local storage, etc...)
//? on peut trouver des custom hooks sur Google
//? le but est de montrer comment créer et utiliser un custom hook
const Example = () => {
  // const [loading, setLoading] = useState(true);
  // const [products, setProducts] = useState([]);

  //? si on veut fetch des données d'un autre url pour un autre composant, on devra réécrire une fonction - on réinvente la roue...
  // const getProducts = async () => {
  //   const response = await fetch(url);
  //   const products = await response.json();
  //   setProducts(products);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  const { loading, products } = useFetch(url);

  console.log(products);

  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
    </div>
  );
};

export default Example;
