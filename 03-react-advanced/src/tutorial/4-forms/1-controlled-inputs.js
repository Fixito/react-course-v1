import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName && email) {
      //? si la clef à le même nom que la valeur alors on peut simplifier
      // const person = { firstName: firstName, email: email };
      //? on bidouille pour créer un id mais il existe un package populaire pour faire ça (uuid)
      const person = { id: new Date().getTime().toString(), firstName, email };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName('');
      setEmail('');
      //? on peut voir que ça fonctionne dans le react dev tools
    } else {
      console.log('empty values');
    }
  };

  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstname'>Name :</label>
            <input
              type='text'
              id='firstname'
              name='firstname'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email :</label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type='submit'>add person</button>
        </form>
        {
          //? on évitera d'utiliser l'index du map comme key prop lorsqu'on prévoit de modifier la liste
          people.map((person) => {
            const { id, firstName, email } = person;
            return (
              <div key={id} className='item'>
                <h4>{firstName}</h4>
                <p>{email}</p>
              </div>
            );
          })
        }
      </article>
    </>
  );
};

export default ControlledInputs;
