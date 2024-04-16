import Image from 'next/image'
import { BsCartFill } from 'react-icons/bs';


export function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Image src={'/logo.png'} width={30} height={30} alt="logo da aplicação" />estaurant
        </div>
        <div className='flex items-center space-x-2'>
          <input className='rounded-sm pl-2' placeholder='Procurar Comidas...' />
          <button><BsCartFill color="white" /></button>
        </div>
      </nav>
    </>
  );
}
