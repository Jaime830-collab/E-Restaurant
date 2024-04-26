type ContainerProps = { children: React.ReactNode };
export const CartItemContainer = ({ children }: ContainerProps) => (
  <div className="flex overflow-hidden rounded-3xl justify-between items-center border-4 border-orange-700 bg-gray-600">
    {children}
  </div>
);
export const CartItemImage = ({ children }: ContainerProps) => (
  <figure className="w-28 h-28 overflow-hidden">{children}</figure>
);
export const CartItemTitle = ({ children }: ContainerProps) => (
  <p className="text-lg text-zinc-200">{children}</p>
);
export const CartItemControls = ({ children }: ContainerProps) => (
  <>
    {" "}
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <div className="flex flex-row items-center font-medium text-lg">
        {children}
      </div>
    </div>
  </>
);
