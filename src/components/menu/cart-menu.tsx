"use client";

import { useState } from "react";
import { FaCartFlatbed, FaLocationPin } from "react-icons/fa6";

export function CartMenu() {
    const [statusMenuCart, setStatusMenuCart] = useState(true)
    function toogleMenu (status: boolean) {
        setStatusMenuCart(status)
    }
  return (
    <>
    {statusMenuCart &&
    <div className="bg-black/50 w-full h-full fixed top-0 left-0 z-[99]  items-center justify-center">
        <div className="bg-gray-700 p-5 rounded-md min-w-[90%] md:min-w-[600px] ">
          <div className="text-center">
            <p className="space-x-2 inline-flex items-center text-orange-600 font-bold text-2xl md-2">
                <span>Meu carrinho</span> <FaCartFlatbed />
            </p>
          </div>

          <div id="cart-items" className="flex justify-between md-2 py-3 flex-col">
            <p className="font-extrabold text-3xl text-white py-6">
              Total: <span id="cart-total">R$ 0,00</span>
            </p>

            <p className="flex items-center space-x-5 mb-2 text-white font-bold mt-2"><span>Endereço de entrega</span> <FaLocationPin /></p>
            <input
              type="text"
              placeholder="Informe seu enredeço..."
              id="address"
              className="w-full py-2 px-2 border-2 p-1 rounded mu-1"
            />
            <p className="py-2 text-red-700 hidden" id="address-warn">
              Digite seu endereço completo!
            </p>

            <div className="flex items-center justify-between mt-5 w-ful">
              <button onClick={() => toogleMenu(false)} id="close-modal-btn" className=" bg-red-600 text-white px-4 py-1 rounded mt-2 ">
                fechar
              </button>
              <button
                id="checkout-btn"
                className="bg-green-600 text-white px-4 py-1 rounded mt-2"
              >
                Finalizar pedido
              </button>
            </div>
          </div>
        </div>
      </div>
}
    </>
  );
}
