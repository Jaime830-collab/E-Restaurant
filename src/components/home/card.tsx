import { BiFoodMenu } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { GiFoodTruck } from "react-icons/gi"
import { MdFoodBank, MdPlusOne } from "react-icons/md";

export function Card() {
  return (
    <>
      <figure
        style={{
          backgroundImage: "url(/bolo.jfif)",
          backgroundPosition: 'center'
        }}
        className="flex flex-col justify-end w-56 h-64 overflow-hidden border-2 border-secondary"
      >
        <figcaption className="flex flex-col justify-between w-full h-40 py-3"
          style={{ backgroundColor: "rgba(243, 117, 0, 0.48)" }}
        >
          <div>
            <p className="text-light text-right pr-2">20,00 uni.</p>
            <p className="text-light text-right pr-4">Pizza Recheada</p>
          </div>
          <section className="flex flex-row justify-around">
            <button className="flex bg-bg text-light space-x-2 px-4 py-1 items-center"><GiFoodTruck color="white" /><span className="font-light text-sm">Ver Produto</span></button>
            <button className="rounded-full p-3 bg-secondary border-2 border-bg"><FaPlus color="white" /></button>
          </section>
        </figcaption>
      </figure>
    </>
  );
}
