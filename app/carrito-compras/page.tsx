"use client"
import { Button } from '@heroui/button'
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
} from "@heroui/drawer";
import { useDisclosure } from './hooks/drawer';
import { useState } from 'react';
import { Input } from "@heroui/input";
import { Divider } from "@heroui/divider";

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
        inCar: false,
        quantity: 0
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
        inCar: false,
        quantity: 0
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
        inCar: false,
        quantity: 0
    },
]


const CarritoComprasScreen = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [productosEnCarrito, setProductosEnCarrito] = useState<any[]>([]);



    const pushProductInShoppingCar = (producto: any) => {

        if (productosEnCarrito.length > 0) {
            const findedProduct = productosEnCarrito.find((product: any) => product.id === producto.id);
            if (findedProduct) return;
        }
        setProductosEnCarrito([...productosEnCarrito, producto]);
    }

    const updatequantityProduct = (producto: any, operation: string) => {
        /* console.log(operation)
        switch (operation) {
            case 'sum':
                setProductosEnCarrito(prev => prev.map(product => producto.id === product.id ? { ...product, quantity: product.quantity + 1, stock: product.stock - 1 } : product))
                console.log(productosEnCarrito)
                break;

            default:
                setProductosEnCarrito(prev => prev.map(product => product.id === producto.id ? { ...product, quantity: product.quantity--, stock: product.stock++ } : product))
                break;
        } */
    }



    return (
        <>
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
                                <Button color="primary" variant="bordered" fullWidth className='rounded-full' onPress={() => { pushProductInShoppingCar(product) }}>
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
                    <Button className='rounded-full' color="primary" variant="bordered" fullWidth onPress={onOpen}>
                        Ver carrito {productosEnCarrito.length > 0 ? `(${productosEnCarrito.length})` : ''}
                    </Button>
                </div>
            </div>

            <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="flex flex-col gap-1">Carrito de compras</DrawerHeader>
                            <DrawerBody>
                                {
                                    productosEnCarrito.length === 0
                                        ? <p>No hay productos en el carrito.</p>
                                        : productosEnCarrito.map(productEnCarrito => (
                                            <div>
                                                <div key={productEnCarrito.id} className='flex gap-4 items-center'>
                                                    <div>
                                                        <img className='w-[150px] mb-4 mx-auto' src={productEnCarrito.img} alt="" />
                                                    </div>
                                                    <div className='flex flex-col'>
                                                        <h2 className='font-bold mb-2 text-center'>{productEnCarrito.nombre}</h2>
                                                        <h2 className='text-sm text-center mb-4'>${productEnCarrito.precio}</h2>
                                                        <div className='flex items-center gap-2'>
                                                            <Button className='rounded-full w-2 text-2xl' color="danger" variant="light" onPress={() => updatequantityProduct(productEnCarrito, 'res')}>
                                                                -
                                                            </Button>
                                                            <span>{productEnCarrito.quantity}</span>
                                                            <Button className='rounded-full w-2 text-2xl' color="primary" variant="light" onPress={() => updatequantityProduct(productEnCarrito, 'sum')}>
                                                                +
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Divider className="my-4" />
                                            </div>
                                        ))
                                }
                            </DrawerBody>
                            <DrawerFooter>
                                <Button className='rounded-full' color="danger" variant="bordered" onPress={onClose}>
                                    cerrar
                                </Button>
                                <Button className='rounded-full' color="primary" variant="bordered" onPress={onClose}>
                                    Comprar
                                </Button>
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default CarritoComprasScreen