import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
  //! il faut obligatoirement qu'un composant retourne quelque chose
  //* nous pouvons aussi avoir plusieurs retour et retourner un élément selon une condition
  //* cela rend nos composants plus dynamiques
  const [isLoading, setIsLoading] = useState(true);
  //? il est de convention d'utiliser le préfixe "is" pour des booléens
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        //? on verra une librairie qui gérera les erreurs (axios)
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        // console.log(user);
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => {
        //? on ne catch pas l'erreur 404 (dans le cas où on ne trouve pas l'utilisateur), mais une erreur de réseau
        console.log(error);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;
