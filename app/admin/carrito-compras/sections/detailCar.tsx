import { Button } from '@heroui/button'
import { Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader } from '@heroui/drawer'
import React, { FC } from 'react'
import { Divider } from '@heroui/divider';
import ShoppingCar from '@/core/interfaces/ShoppingCar';
import ShoppingCard from '../components/shoppingCard';
type Props = {
    isOpen: boolean,
    onOpenChange: any,
    productosEnCarrito: ShoppingCar[]

}
const DetailCar:FC<Props> = ({isOpen, onOpenChange, productosEnCarrito}) => {
    return (
        <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
            <DrawerContent>
                {(onClose) => (
                    <>
                        <DrawerHeader className="flex flex-col gap-1">Carrito de compras</DrawerHeader>
                        <DrawerBody>
                            {
                                productosEnCarrito.length === 0
                                    ? <p>No hay productos en el carrito.</p>
                                    : productosEnCarrito.map((productEnCarrito:ShoppingCar) => (
                                      <ShoppingCard key={productEnCarrito.id} productEnCarrito={productEnCarrito}></ShoppingCard>  
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
    )
}

export default DetailCar