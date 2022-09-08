import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      //? si on clique plusieurs fois sur le bouton, la fonction s'éxécutera autant de fois mais ne prendra en compte que l'ancienne valeur à chaque fois (0)
      // setValue(value + 1);

      //? l'argument de l'arrow function est le current state, pas celui appelé avant
      setValue((prevState) => {
        //? ce que retourne cette fonction sera la nouvelle valeur du state donc il faut faire attention que ça ne soit pas undefined sinon ça pourrait faire buguer l'appli
        return prevState + 1;

        //* on peut utiliser cette façon (approche fonctionnelle) avec tous les exemples précédents
      });
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className='btn' onClick={reset}>
          reset
        </button>
        <button className='btn' onClick={() => setValue(value + 1)}>
          increase
        </button>
      </section>

      <section style={{ margin: '4rem 0' }}>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;

// TODO : Faire le premier projet "Birthday Reminder"
