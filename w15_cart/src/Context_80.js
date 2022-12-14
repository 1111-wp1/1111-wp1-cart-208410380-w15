import React, { useState, useContext, useReducer, useEffect, Children } from 'react';
import Reducer_80 from './Reducer_80';

import cartItems from './data'

const AppContext_80 = React.createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  amount: 4,
  total: 999.9
}

const AppProvider_80 = ({children}) => {
  const [state, dispatch] = useReducer(Reducer_80, initialState);
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  }

  return <AppContext_80.Provider value={{...state,clearCart}}>
      {children}
  </AppContext_80.Provider>
};

const useGlobalContext_80 = () => {
  return useContext(AppContext_80);
}

export { AppProvider_80, useGlobalContext_80};
