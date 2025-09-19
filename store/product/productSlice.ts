import Category from '@/core/interfaces/Category';
import Product from '@/core/interfaces/Product';
import { GeneratorId } from '@/core/lib/uuid/GeneratorId';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IProductSlice {
  products: Product[]
}

const initialState: IProductSlice = {
  products: [
    {
      id: GeneratorId.generateId(),
      name: 'Iphone 14 pro max',
      price: 4000000,
      img: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/refurb-iphone-14-pro-silver-202404?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=YW1wQmFoQ3Nkd2xOYlpST2E3aVorOUdtM21BZVJIYW5UaCtoamtaejlkaXcrcEZlazdtNk1ETXZSUGNBL0N5MDg4UzhFc0lueE1nc1pEVHZvUWJZVTJtNTBseVNpcWU3a3MwOWlDR054K1k2dmxLSjNHenFjaEVSVFNya1RXdVg',
      stock: 10,
      inCar: false,
    },
    {
      id: GeneratorId.generateId(),
      name: 'Macbook 12',
      price: 4000000,
      img: 'https://www.apple.com/newsroom/images/product/mac/standard/Apple_new-macbookair-wallpaper-screen_11102020_big.jpg.large.jpg',
      stock: 2,
      inCar: false,
    },
    {
      id: GeneratorId.generateId(),
      name: 'Airpops 12 pro max',
      price: 4000000,
      img: 'https://mac-center.com/cdn/shop/files/AirPods_Pro_en_su_estuche_con_MagSafe.jpg?v=1742255727&width=1445',
      stock: 5,
      inCar: false,
    },
  ]
}

const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      state.products.push(action.payload);
    }
  }
});

export const { addProduct } = ProductSlice.actions

export default ProductSlice.reducer