import ShoppingCar from '@/core/interfaces/ShoppingCar'
import { Button } from '@heroui/button'
import React, { FC } from 'react'
import { Divider } from '@heroui/divider';
import { useDispatch } from 'react-redux';
import { resQuantityProduct, sumQuantityProduct } from '@/store/shoppingCar/shoppingCar';

type Props = {
    productEnCarrito: ShoppingCar

}

const ShoppingCard:FC<Props> = ({productEnCarrito}) => {
    const dispatch = useDispatch();
    
    const sumProduct = () => {
        dispatch(sumQuantityProduct(productEnCarrito))
    }

    const resProduct = () => {
        dispatch(resQuantityProduct(productEnCarrito))
    }

    return (
        <div>
            <div className='flex gap-4 items-center'>
                <div>
                    <img className='w-[150px] mb-4 mx-auto' src={productEnCarrito.product.img} alt="" />
                </div>
                <div className='flex flex-col'>
                    <h2 className='font-bold mb-2 text-center'>{productEnCarrito.product.name}</h2>
                    <h2 className='text-sm text-center mb-4'>${productEnCarrito.product.price}</h2>
                    <div className='flex items-center gap-2'>
                        <Button className='rounded-full w-2 text-2xl' color="danger" variant="light" onPress={resProduct}>
                            -
                        </Button>
                        <span>{productEnCarrito.quantity}</span>
                        <Button className='rounded-full w-2 text-2xl' color="primary" variant="light" onPress={sumProduct} >
                            +
                        </Button>
                    </div>
                </div>
            </div>
            <Divider className="my-4" />
        </div>
    )
}

export default ShoppingCard