import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useFetch } from '../../9-custom-hooks/final/2-useFetch';

const url = 'https://course-api.com/javascript-store-products';

//* partie 3 - useMemo
const calculateMostExpensive = (data) => {
  //? cette fonction ets appelée à chaque fois qu'on clique sur count, iaginons si elle prenait longtemps à récupérer notre valeur
  //? solution : useMemo - se rappelle de la valeur
  console.log('hello');

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
//* à chaque fois que le state de count est mis à jour, cela déclenche un nouveau rendu du composant
//? solution : useMemo

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  //* partie 2
  //? et si...
  const [cart, setCart] = useState(0);

  //? à chaque rendu on recréé la fonction qu'on passe dans des composants ce qui crééra un nouveau rendu de singleProduct
  //? solution : useCallback - si la valeur de la fonction ne change pas => pas de rendu, sinon => rendu
  const addToCart = useCallback(() => {
    setCart(cart + 1);
    //? si le tableau des dépendances est vide on ne crééra la fonction qu'une fois donc ça ne marchera qu'une fois
    console.log(cart);
  }, [cart]);

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
      <h1 style={{ marginTop: '3rem' }}>cart : {cart}</h1>
      {/* <h1>most expensive : ${calculateMosExpensive(products)}</h1> */}
      <h1>Most Expensive : ${mostExpensive}</h1>
      <BigList products={products} addToCart={addToCart} />
    </>
  );
};

//? React.memo mémorize la valeur des props et si elle ne change pas, elle ne déclenchera pas de rendu
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
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

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
