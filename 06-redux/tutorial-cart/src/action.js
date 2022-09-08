//? une bonne pratique est de définir les actions dans des variables ce qui permettra de voir une erreur si l'on tape mal le nom
export const DECREASE = 'DECREASE';
export const INCREASE = 'INCREASE';
export const REMOVE = 'REMOVE';
export const CLEAR_CART = 'CLEAR_CART';
export const GET_TOTALS = 'GET_TOTALS';
export const TOGGLE_AMOUNT = 'TOGGLE_AMOUNT';

// action creator
export const removeItem = (id) => {
  return { type: REMOVE, payload: { id } };
};
