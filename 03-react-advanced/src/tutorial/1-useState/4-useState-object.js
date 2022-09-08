import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message'
  });
  // console.log(person);

  //* 2 - on peut déclarer plusieurs States si on veut
  const [name, setName] = useState('peter');
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState('random message');

  const changeMessage = () => {
    //! si on fait ça, on va remplacer notre objet par un string
    // setPerson('hello world');
    //! Comme ceci, on perdra les autres proriétés
    // setPerson({ message: 'hello world' });

    //* la solution est d'utiliser un spread operator
    // setPerson({ ...person, message: 'hello world' });

    //? 2
    setMessage('hello world');
  };

  return (
    <>
      {/* <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3> */}
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
