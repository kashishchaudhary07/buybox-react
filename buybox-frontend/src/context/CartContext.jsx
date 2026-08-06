import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) => item.name === product.name
      );

      if (existingItem) {
        return prev.map((item) =>
          item.name === product.name
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  }

  function removeFromCart(index) {
    setCartItems((prev) =>
      prev.filter((_, i) => i !== index)
    );
  }

  function increaseQuantity(index) {
    const updated = [...cartItems];
    updated[index].quantity++;
    setCartItems(updated);
  }

  function decreaseQuantity(index) {
    const updated = [...cartItems];

    if (updated[index].quantity > 1) {
      updated[index].quantity--;
      setCartItems(updated);
    } else {
      removeFromCart(index);
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}