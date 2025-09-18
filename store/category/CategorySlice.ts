import Category from '@/core/interfaces/Category';
import { createSlice } from '@reduxjs/toolkit'

interface CategorySlice {
  categories: Category[]
}

const initialState: CategorySlice = {
    categories: []
}

const CategorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {}
});

export const {} = CategorySlice.actions

export default CategorySlice.reducer