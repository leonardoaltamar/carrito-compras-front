import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categories: []
}

const CategorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {}
});

export const {} = CategorySlice.actions

export default CategorySlice.reducer