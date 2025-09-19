import { configureStore } from '@reduxjs/toolkit'
import CategoryReducer from './category/CategorySlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import ProductReducer from './product/productSlice';
import ShoppingCarReducer from './shoppingCar/shoppingCar';

export const store = configureStore({
  reducer: {
    category: CategoryReducer,
    product: ProductReducer,
    shoppingCar: ShoppingCarReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector