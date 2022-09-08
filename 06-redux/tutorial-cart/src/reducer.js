import {
  INCREASE,
  DECREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTALS,
  TOGGLE_AMOUNT
} from './action';
// items
import cartItems from './cart-items';

// initial store
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0
};

const reducer = (state = initialStore, action) => {
  //? redux à une action par défaut lors de l'initialisation
  // console.log({ state, action });

  //* synthaxe avec switch
  // switch (action.type) {
  //   case CLEAR_CART:
  //     return {
  //       ...state,
  //       cart: []
  //     };
  //   default:
  //     return state;
  // }

  if (action.type === CLEAR_CART) {
    return {
      ...state,
      cart: []
    };
  }

  if (action.type === INCREASE) {
    const tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount + 1 };
      }

      return cartItem;
    });

    return {
      ...state,
      cart: tempCart
    };
  }

  if (action.type === DECREASE) {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount - 1 };
      }

      return cartItem;
    });

    return {
      ...state,
      cart: tempCart
    };
  }

  if (action.type === REMOVE) {
    // console.log(action.payload.id);
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id)
    };
  }

  if (action.type === GET_TOTALS) {
    let { total, amount } = state.cart.reduce(
      (carTotal, cartItem) => {
        const { price, amount } = cartItem;
        const total = price * amount;

        carTotal.total += total;
        carTotal.amount += amount;

        return carTotal;
      },
      {
        total: 0,
        amount: 0
      }
    );

    total = parseFloat(total).toFixed(2);

    return { ...state, total, amount };
  }

  if (action.type === TOGGLE_AMOUNT) {
    return {
      ...state,
      cart: state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.toggle === 'inc') {
            return { ...cartItem, amount: cartItem.amount + 1 };
          } else if (action.payload.toggle === 'dec') {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
        }

        return cartItem;
      })
    };
  }

  return state;
};

export default reducer;
