import React, { useState, useContext } from 'react';
import { data } from '../../../data';

const PersonContext = React.createContext();
//* on a accès à deux composants lorqu'on utilise createContext() - Provider, Consumer
//? Provider agit comme un distributeur. Il doit envelopper notre composant racine (tout notre application)

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    //* normalement on wrap notre appli dans index.js mais comme on a plusieurs fichiers qui l'utilise on le fera ici
    // <PersonContext.Provider value='hello'>
    //* useContext prend du sens à partir de 2 ou 3 niveau de profondeur
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>Context API / useContext</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  const mainData = useContext(PersonContext);

  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  // const data = useContext(PersonContext);
  // console.log(data);
  const { removePerson } = useContext(PersonContext);

  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;

// TODO: prjets 12 à 14 (sidebar-modal, stripe submenus, cart)
