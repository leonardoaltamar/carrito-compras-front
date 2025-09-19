import Category from '@/core/interfaces/Category';
import Product from '@/core/interfaces/Product';
import ShoppingCar from '@/core/interfaces/ShoppingCar';
import { GeneratorId } from '@/core/lib/uuid/GeneratorId';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IShoppingCarSlice {
  shoppingCar: ShoppingCar[]
}

const initialState: IShoppingCarSlice = {
  shoppingCar: []
}

const ShoppingCarSlice = createSlice({
  name: 'shoppingCar',
  initialState,
  reducers: {
    addProductInCar(state, action: PayloadAction<ShoppingCar>) {
      state.shoppingCar.push(action.payload);
    },
    sumQuantityProduct(state, action: PayloadAction<ShoppingCar>){
      state.shoppingCar.map( shoppingCar => {
        if(shoppingCar.id === action.payload.id){
          if(shoppingCar.quantity < shoppingCar.product.stock)
          shoppingCar.quantity++;
        }
      })
    },
    resQuantityProduct(state, action: PayloadAction<ShoppingCar>){
      state.shoppingCar.map( shoppingCar => {
        if(shoppingCar.id === action.payload.id){
          if(shoppingCar.quantity > 0)
          shoppingCar.quantity--;
        }
      })
    }
  }
});

export const { addProductInCar, sumQuantityProduct, resQuantityProduct } = ShoppingCarSlice.actions

export default ShoppingCarSlice.reducer