import React from 'react';

//* on veut changer le titre quand on clique sur un bouton
const ErrorExample = () => {
  let title = 'random title';

  const handleClick = () => {
    //? quand on clique sur le bouton, on change le titre mais le composant n'est pas re-rendu donc on ne voit pas de changement
    //? De plus, on ne garde pas la nouvelle valeur entre 2 rendus
    //? C'est là qu'intervient le useState
    title = 'hello people';
  };

  return (
    <>
      <h2>{title}</h2>
      <button className='btn' onClick={handleClick}>
        change title
      </button>
    </>
  );
};

export default ErrorExample;
