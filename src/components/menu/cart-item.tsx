import Image from "next/image";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import * as CartItemComponents from "./cart-item-components";

type CartItemProps = {
  item: {
    id: number;
    name: string;
    quantity: number;
  };
};

export function CartItem({ item }: CartItemProps) {
  return (
    <CartItemComponents.CartItemContainer>
      <CartItemComponents.CartItemImage>
        <img
          className="h-full rounded-2xl"
          src="/hamburger.jfif"
          alt={`Foto de um ${item?.name}`}
        />
      </CartItemComponents.CartItemImage>
      <CartItemComponents.CartItemTitle>{item.name}</CartItemComponents.CartItemTitle>
      <CartItemComponents.CartItemControls>
        <div className="bg-red-500 text-slate-100 p-3">
          <FaMinus color="white" />
        </div>
        <span className="p-3 text-slate-100">{item.quantity}</span>
        <div className="bg-green-500 text-slate-100 dark:text-slate-500 p-3">
          <FaPlus color="white" />
        </div>
      </CartItemComponents.CartItemControls>
    </CartItemComponents.CartItemContainer>
  );
}
