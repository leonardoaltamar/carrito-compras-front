import Product from '@/core/interfaces/Product'
import { GeneratorId } from '@/core/lib/uuid/GeneratorId'
import { addProductInCar } from '@/store/shoppingCar/shoppingCar'
import { Button } from '@heroui/button'
import React, { FC } from 'react'
import { useDispatch } from 'react-redux'


type Props = {
    product: Product
}


const ProductCard:FC<Props>= ({product}) => {

    const dispatch = useDispatch();
    const pushProductInShoppingCar = (product: Product) => {
        dispatch(addProductInCar({
            id: GeneratorId.generateId(),
            product: product,
            quantity: 1
        }));
    }
    return (
        <div className='flex flex-col justify-between card-product border-gray-200 shadow-lg shadow-gray-500/10 border-1 rounded-[10px] py-8 min-w-[230px] px-4 relative'>
            <div className=' absolute top-2.5 right-2.5 flex gap-2'>
                <span className='bg-gray-200 px-2 rounded-full mb-2 inline-block text-sm'>{product.stock}</span>
            </div>
            <img className='w-[150px] mb-4 mx-auto' src={product.img} alt="" />
            <div>
                <h2 className='font-bold mb-2 text-center'>{product.name}</h2>
                <h2 className='text-sm mb-4 text-center'>${product.price}</h2>
            </div>
            <Button color="primary" variant="bordered" fullWidth className='rounded-full' onPress={() => { pushProductInShoppingCar(product) }}>
                Ir al carrito
            </Button>
        </div>
    )
}

export default ProductCard