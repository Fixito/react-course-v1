import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  // chargement de la requête
  const [requests, setRequests] = useState(0);
  const [loading, setLoading] = useState(false);
  // erreur
  const [error, setError] = useState({ show: false, msg: '' });

  const searchGithubUser = async (user) => {
    toggleError();
    // setLoading(true)
    const response = await axios(`${rootUrl}/users/${user}`).catch((err) =>
      console.log(err)
    );

    if (response) {
      setGithubUser(response.data);
    } else {
      toggleError(true, "il n'ya pas d'utilisateur avec ce nom");
    }
  };

  // vérifie le nombre de requêtes restantes
  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining }
        } = data;

        setRequests(remaining);

        if (remaining === 0) {
          // retourner une erreur
          toggleError(true, 'désolé, you avez dépassé votre limite horaire !');
        }
      })
      .catch((err) => console.log(err));
  };

  const toggleError = (show = false, msg = '') => {
    setError({ show, msg });
  };

  // erreur
  useEffect(checkRequests, []);

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requests,
        error,
        searchGithubUser
      }}>
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GithubProvider };
