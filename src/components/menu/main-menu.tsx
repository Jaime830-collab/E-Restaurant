import { ApresentationMenu } from "./apresentation-menu";
import { ItemsMenu } from "./items-menu";
import { CartContainerMenu } from "./cart-container-menu";
/*
    TODO: CRIAR TIPOS DESSE COMPONENT
    */
export function MainMenu({ itemsByCategory }: any) {
  return (
    <>
      <ApresentationMenu />

      <h2 className="text-2xl md:text-3xl font-bold text-white text-center mt-6">
        Conheça nosso cardápio!
      </h2>
      {/*
    TODO: CRIAR TIPOS DESSE ELEMENT
    */}
      {itemsByCategory?.map((value: any) => (
        <ItemsMenu title={value?.category} items={value?.items} />
      ))}

      <CartContainerMenu />
    </>
  );
}
