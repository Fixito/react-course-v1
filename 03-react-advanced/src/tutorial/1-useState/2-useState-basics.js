import React, { useState } from 'react';
//* tous les hooks commencent par use...
//* le nom d'un composant commence par une majuscule sinon => erreur
//* un hook doit être dans une fonction/le body d'un composant
//* ne peut pas être appeler dans une condition

//* useState est une fonction
const UseStateBasics = () => {
  // console.log(useState);
  // console.log(useState('hello world'));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);

  const [text, setTitle] = useState('random title');

  const handleClick = () => {
    // setTitle('hello world');
    if (text === 'random title') {
      setTitle('hello world');
    } else {
      setTitle('random title');
    }
  };

  return (
    <>
      <h2>{text}</h2>
      <button className='btn' onClick={handleClick}>
        change title
      </button>
    </>
  );
};

export default UseStateBasics;
