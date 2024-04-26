
import { Item } from "../types";
import { CardMenu } from "./card-menu";
interface IItemsMenu {
  title: string;
  items: Item[];
}

export function ItemsMenu({ title, items }: IItemsMenu) {

  return (
    <>
      <div className="mx-auto max-w-7xl px-2 my-2  text-white">
        <h2 className="font-bold text-3xl">{title}</h2>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 md:gap-10 gap-7 mx-auto max-w-7xl px-2 mb-16 mt-5">
        {items?.map((value, index) => <CardMenu
          key={index}
          item={value}
          alternative_text={`Foto de ${value.name}`}
        />)}
        
      </div>
    </>
  );
}
