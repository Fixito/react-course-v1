import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();

    //! si on change le state, on va provoquer un loop infini car la modification du state déclenche useEffect (dans lequel nous modifions le state)
    //* la solution est d'utiliser un [] dans le second arg de useEffect pour qu'il ne se déclenche qu'au premier rendu du composant
    setUsers(users);
    // console.log(users);
  };

  useEffect(() => {
    //! la fonction callback de useEffect ne peut pas être asynchrone car elle retournerait une Promesse - erreur

    getUsers();
  }, []);

  return (
    <>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;

          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
