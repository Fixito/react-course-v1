import React, { useEffect, useRef } from 'react';

// préserve valeur comme useState
// Ne déclenche PAS de rendu
// cible des éléments dans le DOM

//? l'utilité la plus populaire de useRef est de cibler des éléments du DOM
const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
  };

  //? refContainer est un objet avec la prop current valant null
  console.log(refContainer);

  //? pas besoin de tableau de dépendances car useRef de déclenche pas de rendu
  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <input type='text' ref={refContainer} />
        <button type='submit'>submit</button>
      </form>
      {/* divContainer pointe sur l'élément div */}
      <div ref={divContainer}>hello world</div>
    </>
  );
};

export default UseRefBasics;

// TODO: projet 11 (navbar)
