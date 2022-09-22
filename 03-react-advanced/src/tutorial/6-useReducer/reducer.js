//* fonction reducer
//* on préfère mettre cette fonction dans un fichier à part étant donnée quelle a plusieurs fonctionnalités

//? c'est dans la fonction reducer qu'on va gérer le state
//! il faut toujours retourner un state
export const reducer = (state, action) => {
  // console.log(state, action);
  // if (action.type === 'TESTING') {
  //   return {
  //     ...state,
  //     people: data,
  //     isModalOpen: true,
  //     modalContent: 'item added'
  //   };
  // }
  //? on pourrait retourner le state par défaut mais en lancant une erreur on aura un indice sur le bug
  // return state;
  // throw new Error('no matching action type');

  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'item added'
    };
  }

  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'please enter value'
    };
  }

  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      isModalOpen: false
    };
  }

  if (action.type === 'REMOVE_ITEM') {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );

    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'item removed'
    };
  }

  throw new Error('no matching action type');
};
