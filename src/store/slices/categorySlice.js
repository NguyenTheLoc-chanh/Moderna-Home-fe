// src/redux/slices/CategorySlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import CategoryService from '../../services/categoryService'

// Thunk: get all
export const fetchCategories = createAsyncThunk(
  'category/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await CategoryService.getAllCategories()
      return data.categoryDtoList
    } catch (err) {
      return rejectWithValue(err.message || 'Failed to fetch categories')
    }
  }
)

// Thunk: get by id
export const fetchCategoryById = createAsyncThunk(
  'category/fetchById',
  async (id, { rejectWithValue }) => {
    try {
      const data = await CategoryService.getCategoryById(id)
      return data.categoryDto
    } catch (err) {
      return rejectWithValue(err.message || 'Failed to fetch category')
    }
  }
)

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
    selectedCategory: null,
    loading: false,
    error: null
  },
  reducers: {
    clearSelected: (state) => {
      state.selectedCategory = null
    }
  },
  extraReducers: (builder) => {
    builder
      // fetch all
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false
        state.categories = action.payload
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      // fetch by id
      .addCase(fetchCategoryById.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCategoryById.fulfilled, (state, action) => {
        state.loading = false
        state.selectedCategory = action.payload
      })
      .addCase(fetchCategoryById.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export const { clearSelected } = categorySlice.actions
export default categorySlice.reducer
