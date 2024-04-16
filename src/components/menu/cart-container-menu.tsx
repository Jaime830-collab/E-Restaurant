"use client"

import { useState } from "react";
import { ButtonCartMenu } from "./button-cart-menu";
import { CartMenu } from "./cart-menu";

export function CartContainerMenu(){
    const [statusMenuCart, setStatusMenuCart] = useState(false)
    function toogleMenu (status: boolean) {
        setStatusMenuCart(status)
    }
    return (<>
    <CartMenu statusMenuCart={statusMenuCart} onToogleMenu={toogleMenu} />
    <ButtonCartMenu onToogleMenu={toogleMenu} />
    </>)
}