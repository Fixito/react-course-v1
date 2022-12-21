import { useState, useEffect, useCallback } from 'react';

//* Un custom hook commence toujours par useQuelqueChose - sinon erreur car on ne peut pas utiliser des hooks de React dans une fonction régulière
export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  // On peut renommer le state de manière plus générique
  const [products, setProducts] = useState([]);

  //? On récréé la fonction seulement si l'url change
  const getProducts = useCallback(async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  }, [url]);

  //! Il y a un warning qui demande d'inclure getProducts dans le tableau de dépendance mais cela provequerait un loop infini
  // Solution : useCallback qu'on verra plus tard
  useEffect(() => {
    getProducts();
  }, [url, getProducts]);

  // il faut retourner quelque chose de notre custom hook
  return { loading, products };
};
