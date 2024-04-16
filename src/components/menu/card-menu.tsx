import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import { Item } from "../types";


interface IMenuPageProps {

    item: Item;
    alternative_text: string;
    
}
export function CardMenu({ item, alternative_text }: IMenuPageProps){
    const price_format = (price: number) => {
        return String(Number(price).toFixed(2)).replace(".", ",")
    }
    return (
        <div className="flex gap-2">
            <Image src={item?.image}
                alt={alternative_text}
                className="rounded-md hover:scale-110 hover:-rotate-2 duration-300"
                width={112}
                height={112}
            />

            
            <div>
                <p className="font-bold  text-white">{item?.name}</p>
                <p className="text-sm  text-white mt-3">
                    {item?.description}
                </p>
    
                <div className="flex items-center gap-2 justify-between text-white mt-3">
                    <p className="font-bold text-lg">R$ {price_format(item?.price)}</p>
                    <button 
                        className="bg-red-500 px-5 rounded add-to-cart-btn"
                        >
                        <FaPlus />
                    </button>
                </div>
            </div>
        </div>
    )
}