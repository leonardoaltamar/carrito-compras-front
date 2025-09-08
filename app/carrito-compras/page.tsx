import { Button } from '@heroui/button'
import React from 'react'


const productos = [
    {
        id: 1,
        nombre: 'Iphone 14 pro max',
        precio: 4000000,
        img: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/refurb-iphone-14-pro-silver-202404?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=YW1wQmFoQ3Nkd2xOYlpST2E3aVorOUdtM21BZVJIYW5UaCtoamtaejlkaXcrcEZlazdtNk1ETXZSUGNBL0N5MDg4UzhFc0lueE1nc1pEVHZvUWJZVTJtNTBseVNpcWU3a3MwOWlDR054K1k2dmxLSjNHenFjaEVSVFNya1RXdVg',
        categoria: {
            id: 1,
            descripcion: 'tecnologica'
        },
        stock: 10,
        inCar: false
    },
    {
        id: 2,
        nombre: 'Macbook 12',
        precio: 4000000,
        img: 'https://www.apple.com/newsroom/images/product/mac/standard/Apple_new-macbookair-wallpaper-screen_11102020_big.jpg.large.jpg',
        categoria: {
            id: 1,
            descripcion: 'tecnologica'
        },
        stock: 2,
        inCar: false
    },
    {
        id: 3,
        nombre: 'Airpops 12 pro max',
        precio: 4000000,
        img: 'https://mac-center.com/cdn/shop/files/AirPods_Pro_en_su_estuche_con_MagSafe.jpg?v=1742255727&width=1445',
        categoria: {
            id: 1,
            descripcion: 'tecnologica'
        },
        stock: 5,
        inCar: false
    },
]


const CarritoComprasScreen = () => {
    return (
        <div className='py-8 flex flex-col justify-center items-center'>            
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">¿Qué productos deseas llevar?</h2>
            </div>


            <div className='content flex justify-center gap-4 flex-wrap'>

                {
                    productos.map(product => (
                        <div key={product.id} className='flex flex-col justify-between card-product border-gray-200 shadow-lg shadow-gray-500/10 border-1 rounded-[10px] py-8 min-w-[230px] px-4 relative'>
                            <div className=' absolute top-2.5 right-2.5 flex gap-2'>
                                <span className='bg-gray-200 px-2 rounded-full mb-2 inline-block text-sm'>{product.stock}</span> 
                            </div>                    
                            <img className='w-[150px] mb-4 mx-auto' src={product.img} alt="" />
                            <div>
                                <h2 className='font-bold mb-2 text-center'>{product.nombre}</h2>
                                <h2 className='text-sm mb-4 text-center'>${product.precio}</h2>
                            </div>
                            <Button color="primary" variant="bordered" fullWidth className='rounded-full'>
                                Ir al carrito
                            </Button>
                        </div>
                    ))
                }

            </div>

            <div className="flex gap-2.5 fixed bottom-0 left-[50%] transform-[translateX(-50%)] p-3 rounded-t-2xl border-1 border-gray-200 w-full max-w-[360px] shadow-lg shadow-gray-500/50">
                <Button className='rounded-full' color="danger" variant="bordered" fullWidth>
                    Atrás
                </Button>
                <Button className='rounded-full' color="primary" variant="bordered" fullWidth>
                    Ver carrito {/* (1) */}
                </Button>
            </div>
        </div>
    )
}

export default CarritoComprasScreen