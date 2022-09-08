import React, { useState, useEffect } from 'react';

//* par défaut s'éxécute après chaque rendu
//* cleanup function
//* second paramètre
//? permet de faire les effets secondaires (side effects) -  tout travail qui se fait en-dehors du composant
//? ex: changer le titre du document, s'incrire, fetch des données, ajouter un eventListener,...
// const UseEffectBasics = () => {
//   //? useState conserve la valeur entre chaque rendu et il déclenche un nouveau rendu
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     console.log('appel de useEffect');
//     document.title = `Nouveaux messages (${value})`;
//   });

//   //? le composant est rendu 2 fois de base à cause du strict mode dans index.js. Si on l'enlève, il n'y aura plus qu'un rendu
//   console.log('rendu du composant');
//   return (
//     <>
//       <h1>{value}</h1>
//       <button className='btn' onClick={() => setValue(value + 1)}>
//         clique-moi
//       </button>
//     </>
//   );
// };

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  //* comment faire si je veux que mon useEffect ne se déclenche que si ma valeur est plus grande que 0 ?
  //? on pourrait se dire qu'on ferait comme ça :
  // if (value > 0) {
  //   useEffect(() => {
  //     console.log('appel de useEffect');
  //     document.title = `Nouveaux messages (${value})`;
  //   });
  // }
  //! mais on a dit qu'on ne pouvait pas utiliser un hook dans une condition - on a une erreur

  //* une façon de faire est de mettre la condition DANS le useEffect
  // useEffect(() => {
  //   console.log('appel de useEffect');

  //   if (value >= 1) {
  //     document.title = `Nouveaux messages (${value})`;
  //   }
  // });

  //* on peut aussi utiliser le second argument de useEffect
  useEffect(() => {
    console.log('appel de useEffect');

    if (value >= 1) {
      document.title = `Nouveaux messages (${value})`;
    }
  }, [value]);
  //? si 2ème arg est [] alors useEffect ne déclenche qu'au premier rendu
  //? si on lui une valeur entre les [] alors il se déclenchera à chaque fois que la variable sera modifiée

  useEffect(() => {
    console.log('hello world');
  }, []);

  console.log('rendu du composant');

  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        clique-moi
      </button>
    </>
  );
};

export default UseEffectBasics;
