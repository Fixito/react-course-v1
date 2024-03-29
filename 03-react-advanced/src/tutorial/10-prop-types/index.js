import React from 'react';
import Product from './Product';
import { useFetch } from '../9-custom-hooks/2-useFetch';

const url = 'https://course-api.com/react-prop-types-example';

//* prop-types permet de valider les props qu'on passe dans les composants
const Index = () => {
  const { products } = useFetch(url);

  return (
    <div>
      <h2>products</h2>
      <section className='products'>
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
};

export default Index;
