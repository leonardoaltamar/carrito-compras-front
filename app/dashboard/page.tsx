import { faHouse, faRectangleList } from '@fortawesome/free-regular-svg-icons'
import { faBox, faCartShopping, faCubesStacked } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const DashboardScreen = () => {
  return (
    <div className="h-screen flex flex-col justify-around items-center">
        <h2 className='mb-2 font-bold text-3xl'>Bienvenidos al menú de FastShop</h2>        
        <div className="content-menu flex justify-center items-center gap-10">

            <div className="cursor-pointer flex flex-col gap-4 bg-[#185caa] p-4 max-w-[225px] min-w-[225px] h-[225px] rounded-full text-white items-center justify-center">
                <FontAwesomeIcon icon={faRectangleList} className='text-sm w-20' />
                <p className='text-base'>Categorias</p>
            </div>

            <div className="cursor-pointer flex flex-col gap-4 bg-[#185caa] p-4 max-w-[225px] min-w-[225px] h-[225px] rounded-full text-white items-center justify-center">
                <FontAwesomeIcon icon={faCubesStacked} className='text-sm w-20' />
                <p className='text-base'>Productos</p>
            </div>

            <div className="cursor-pointer flex flex-col gap-4 bg-[#185caa] p-4 max-w-[225px] min-w-[225px] h-[225px] rounded-full text-white items-center justify-center">
                <FontAwesomeIcon icon={faCartShopping} className='text-sm w-20' />
                <p className='text-base'>Carrito de compras</p>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default DashboardScreen