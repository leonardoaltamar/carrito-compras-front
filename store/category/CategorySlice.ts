import Category from '@/core/interfaces/Category';
import { GeneratorId } from '@/core/lib/uuid/GeneratorId';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ICategorySlice {
  categories: Category[]
}

const initialState: ICategorySlice = {
    categories: [
      {
        id: GeneratorId.generateId(),
        code: 'TEC',
        description: 'Tecnología'
      }
    ]
}

const CategorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addCategory(state, action: PayloadAction<Category>){
      state.categories.push(action.payload);
    }
  }
});

export const { addCategory } = CategorySlice.actions

export default CategorySlice.reducer