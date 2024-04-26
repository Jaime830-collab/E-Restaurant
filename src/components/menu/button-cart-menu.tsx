"use client"
import { useCart } from "../hooks/cart-hook";

interface ICartMenuProps {
    onToogleMenu: Function;
  }

export function ButtonCartMenu({ onToogleMenu }: ICartMenuProps){
    const { qtdTotaItems } = useCart()
   return ( <div className="w-full bg-red-500 py-3 fixed bottom-0 z-40 flex items-center justify-center">
   <button 
       className="flex items-center gap-2  text-white font-bold"
       id="cart-btn"
       onClick={() => onToogleMenu(true)}
       >
           (<span id="cart-count">{qtdTotaItems}</span>)
               Veja seu carrinho
           <i className="fa fa-cart-plus text-lg text-white"></i>
   </button>
</div>)
}