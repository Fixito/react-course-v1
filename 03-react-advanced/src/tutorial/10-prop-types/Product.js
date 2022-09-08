import React from 'react';
import { PropTypes } from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({ image, name, price }) => {
  // console.log(image, name, price);

  //* 2ème étape alternative - valeurs par défaut avec short-circuit
  const url = image && image.url;

  return (
    <article className='product'>
      {/* par contre, si on veut accéder à image.url on sait que lorsque l'on veut accéder à une prop d'une prop qui n'existe pas on a une erreur même si c'est 1 élément sur 100 */}
      {/* <img src={image.url} alt={name} /> */}
      <img src={url || defaultImage} alt={name || 'default name'} />
      <h4>{name}</h4>
      {/* le dernier objet n'a pas de prop price donc le prix ne s'affiche pas */}
      {/* <p>${price}</p> */}
      <p>${price || 3.99}</p>
      {/* <h4>single product</h4> */}
    </article>
  );
};

//* 1ère étape
//? on vérifie qu'on a le type attendu sur les props. On aura une erreur dnas la console si il y a un problème
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

//* 2ème étape - props par défaut
// Product.defaultProps = {
//   name: 'default name',
//   price: 3.99,
// ! le problème ici est qu'on a pas de prop url pour l'image
//   image: defaultImage
// };

export default Product;

//* PropTypes rend le code plus "lourd" et difficle à lire donc on évitera de l'utiliser dans nos projets car le but est juste d'apprendre
