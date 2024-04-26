"use client";

import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface IItem {
  id: number;
  name: string;
  quantity: number;
}

interface ICartContext {
  cart: Array<IItem> | undefined;
  addFoodCart: any;
  deleteFoodCart: any;
  frushFoodCart: any;
  qtdTotaItems: number
}

interface ICartProviderProps {
  children: React.ReactNode;
}
const cartContext = createContext<ICartContext>({
  cart: [],
  deleteFoodCart: () => {},
  addFoodCart: () => {},
  frushFoodCart: () => {},
  qtdTotaItems: 0
});

export function CartProvider({ children }: ICartProviderProps) {
  const [cart, setCart] = useState<IItem[]>([]);
  const [qtdTotaItems, setTotalItems] = useState<number>(0);


  useEffect(() => {
    const cartString = localStorage.getItem("cart");
 
    if (cartString) {
      const cartParsed: Array<{id: number, name: string, quantity: number }> = JSON.parse(cartString)
      setCart(cartParsed);

      setTotalItems(cartParsed.reduce((total, current) => current.quantity + total, 0))
    } else {
      
      localStorage.setItem("cart", "[]");
    }
    
  }, []);
  function addFoodCart(item?: IItem) {
    if (item) {
      const cartFinded = cart.filter(
        (itemArray) => itemArray.name === item.name
      );
      const indexItem = cart.findIndex(
        (itemArray) => itemArray.name === item.name
      );
      if (cartFinded.length === 0) {
        setCart([...cart, { ...item, quantity: 1 }]);
        localStorage.setItem("cart", JSON.stringify(cart));
        return;
      }
      // copia para variavel mutavel
      let cartUpdate = cart;

      // altera valor da variavel
      cartUpdate[indexItem].quantity += 1;

      // muda estado
      setCart(cartUpdate);

      setTotalItems(qtdTotaItems + 1)

      // Persite no localstorage
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }

  function deleteFoodCart(name: string) {
    const indexItem = cart.findIndex((itemArray) => itemArray.name === name);
    // copia para variavel mutavel
    let cartUpdate = cart;

    if (cartUpdate[indexItem].quantity > 1) {
      // altera valor da variavel
      cartUpdate[indexItem].quantity -= 1;

      // muda estado
      setCart(cartUpdate);
    } else {
      setCart(cart.filter((item) => item.name !== name));
    }
    setTotalItems(qtdTotaItems - 1)
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function frushFoodCart() {
    setCart([]);
    setTotalItems(0)
    localStorage.setItem("cart", "[]");
  }
  return (
    <cartContext.Provider
      value={{
        cart,
        addFoodCart,
        deleteFoodCart,
        frushFoodCart,
        qtdTotaItems,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export function useCart() {
  return useContext(cartContext);
}
