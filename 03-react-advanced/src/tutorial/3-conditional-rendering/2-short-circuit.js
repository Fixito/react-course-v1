import React, { useState } from 'react';
//* short-circuit evaluation
//* opérateur ternaire

const ShortCircuit = () => {
  const [text, setText] = useState('peter');
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  // console.log(secondValue);
  const [isError, setIsError] = useState(false);

  //? quand on parle de JSX, on parle de retourner une valeur c'est pourquoi il faut utiliser une expression
  return (
    <>
      {/* ce n'est pas permis par react car il n'y pas de retour */}
      {/* c'est pourquoi on va utiliser les circuit-courts */}
      {/* {if(){console.log("hello world")}} */}
      {/* <h1>{firstValue}</h1>
      <h1>value : {secondValue}</h1> */}
      <h1>{text || 'john doe'}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {/* {text && <h1>hello world</h1>} */}
      {isError && <h1>erreur...</h1>}
      {isError ? (
        <p>il y a une erreur...</p>
      ) : (
        <div>
          <h2>il n'y a pas d'erreur</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
