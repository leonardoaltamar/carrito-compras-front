import Category from '@/core/interfaces/Category';
import Product from '@/core/interfaces/Product';
import { GeneratorId } from '@/core/lib/uuid/GeneratorId';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ProductSlice {
  products: Product[]
}

const initialState: ProductSlice = {
    products: [
      {
        id: GeneratorId.generateId(),
        name: 'Teclado K3',
        inCar: false,
        price: 500000,
        stock: 10,
        quantity: 30,         
      }
    ]
}

const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>){
      state.products.push(action.payload);
    }
  }
});

export const { addProduct } = ProductSlice.actions

export default ProductSlice.reducer