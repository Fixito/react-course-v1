import React, { useState, useEffect } from 'react';

//* fonction  de nettoyage (cleanup)
//* second argument

const UseEffectCleanup = () => {
  //* on veut récupérer la largeur de la fenêtre
  const [size, setSize] = useState(window.innerWidth);

  // console.log(size);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  //* Qu'est-ce qui se passe si on va dans le dev tools > Elements > Event Listeners ?
  //? on se dit qu'il devrait n'y en avoir qu'un, mais en fait non
  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', checkSize);

    //* c'est là qu'intervient la fonction de nettoyage

    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', checkSize);
    };
    //? on pourrait resoudre notre problème sans fonction cleanup en mettant un tableau de dépendance vide (2nd arguement)
    //? cela marcherait dans le présent (car le composant est tout le temps affiché) mais c'est une bonne pratique à utiliser surtout dans le cas de rendu conditionnel (quand on aura un composant qu'on montre ou cache)
  });

  console.log('render');

  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
