"use client"
import { Button } from '@heroui/button'
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
} from "@heroui/drawer";
import { useState } from 'react';
import { Input } from "@heroui/input";
import { Divider } from "@heroui/divider";
import { useDisclosure } from '@heroui/modal';
import { useAppSelector } from '@/store';
import ProductCard from './components/productCard';
import DetailCar from './sections/detailCar';




const CarritoComprasScreen = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const products = useAppSelector(state => state.product.products);
    const shoppingCar = useAppSelector(state => state.shoppingCar.shoppingCar);

    const [isClient, setIsClient] = useState(false);

    



    return (
        <>
            <div className='py-8 flex flex-col justify-center items-center'>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold">¿Qué productos deseas llevar?</h2>
                </div>
                <div className='content flex justify-center gap-4 flex-wrap'>
                    {
                        products.map(product => (
                            <ProductCard key={product.id} product={product}></ProductCard>
                        ))
                    }

                </div>

                <div className="flex gap-2.5 fixed bottom-0 left-[50%] transform-[translateX(-50%)] p-3 rounded-t-2xl border-1 border-gray-200 w-full max-w-[360px] shadow-lg shadow-gray-500/50">
                    <Button className='rounded-full' color="danger" variant="bordered" fullWidth>
                        Atrás
                    </Button>
                    <Button className='rounded-full' color="primary" variant="bordered" fullWidth onPress={onOpen}>
                        Ver carrito {shoppingCar.length > 0 ? `(${shoppingCar.length})` : ''}
                    </Button>
                </div>
            </div>

            <DetailCar isOpen={isOpen} onOpenChange={onOpenChange} productosEnCarrito={shoppingCar} ></DetailCar>
        </>
    )
}

export default CarritoComprasScreen