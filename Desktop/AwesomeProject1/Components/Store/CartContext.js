import React, {useState, createContext} from 'react';

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: item => {},
  removeItemFromCart: item => {},
});

function CartContextProvider({children}) {
  const [cartItems, setCartItems] = useState([]);

  function addItemToCart(item) {
    //setCartItems((prevItem) => {[...prevItem, item]});

    setCartItems(prevItems => {
      const existingItem = prevItems.find(prevItem => prevItem.id === item.id);
      if (!existingItem) {
        item.qty = 1;
        return [...prevItems, item];
      } else {
        item.qty++;
        return [...prevItems];
      }
    });
  }

  function removeItemFromCart(item) {
    //setCartItems((currentItems) => currentItems.filter((itemId) => itemId != id));
  }

  const value = {
    cartItems: cartItems,
    addItemToCart: addItemToCart,
    removeItemFromCart: removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartContextProvider;
