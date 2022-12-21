import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useFetch } from '../9-custom-hooks/2-useFetch';

const url = 'https://course-api.com/javascript-store-products';

// https://kentcdodds.com/blog/usememo-and-usecallback

//* Chaque fois qu'une prop ou qu'un state change, cela déclenche un nouveau rendu du componsant

//* partie 3 - useMemo
const calculateMostExpensive = (data) => {
  // Cette fonction est appelée à chaque fois qu'on clique sur count
  //? Imaginons si elle prenait longtemps à récupérer notre valeur...
  console.log('hello');
  // Solution : useMemo - mémorise la valeur

  return (
    // récupère le prix le plus grand
    data.reduce((total, item) => {
      const price = item.fields.price;

      if (price >= total) {
        total = price;
      }

      return total;
    }, 0) / 100
  );
};

//* 1ère partie
// À chaque fois que le state de count est mis à jour, cela déclenche un nouveau rendu du composant qui fait un nouveau rendu de BigList et SingleProduct
// Solution : React.memo
const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  //* partie 2
  //? et si...
  const [cart, setCart] = useState(0);

  // À chaque rendu on recréé la fonction qu'on passe dans les composants ce qui crééra un nouveau rendu de singleProduct
  // Solution : useCallback - si la valeur dans la fonction ne change pas => pas de rendu, sinon => rendu
  // Si maintenant on change le state count cela ne déclenchera plus de rendu
  const addToCart = useCallback(() => {
    setCart(cart + 1);
    // Si le tableau des dépendances est vide on ne crééra la fonction qu'une fois donc ça ne marchera qu'une fois
    console.log(cart);
  }, [cart]);

  // partie 3
  const mostExpensive = useMemo(
    () => calculateMostExpensive(products),
    [products]
  );

  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      {/* partie 2 */}
      <h1 style={{ marginTop: '3rem' }}>cart : {cart}</h1>
      {/* partie 3 */}
      {/* <h1>most expensive : ${calculateMosExpensive(products)}</h1> */}
      <h1>Most Expensive : ${mostExpensive}</h1>

      <BigList products={products} addToCart={addToCart} />
    </>
  );
};

// React.memo mémorise la valeur des props et si elles ne changent pas, elle ne déclencheront pas un nouveau rendu
const BigList = React.memo(({ products, addToCart }) => {
  useEffect(() => {
    console.log('big list called');
  });

  return (
    <section className='products'>
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}></SingleProduct>
        );
      })}
    </section>
  );
});

const SingleProduct = ({ fields, addToCart }) => {
  const image = fields.image[0].url;
  let { name, price } = fields;
  price = price / 100;

  useEffect(() => {
    console.count('single item called');
  });

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart}>add to cart</button>
    </article>
  );
};

export default Index;

//TODO: projet 15 (cocktails)
