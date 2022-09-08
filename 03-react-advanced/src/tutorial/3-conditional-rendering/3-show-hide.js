import React, { useState, useEffect } from 'react';

//? on reverra dans cette exemple l'intérêt de la fonction cleanup de useEffect
const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className='btn' onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  //! le problème avec cette méthode est que le useEffect est appelé à chaque fois que le montre le composant
  useEffect(() => {
    window.addEventListener('resize', checkSize);

    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, []);

  return (
    <div style={{ marginTop: '2rem' }}>
      <h1>window</h1>
      <h2>size: {size} PX</h2>
    </div>
  );
};

export default ShowHide;

// TODO: Projets 2 à 7
