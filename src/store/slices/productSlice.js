// src/redux/productSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import ProductService from '../services/productService'

// Thunks
export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      return await ProductService.getAllProducts()
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message)
    }
  }
)

export const addProduct = createAsyncThunk(
  'products/add',
  async (formData, { rejectWithValue }) => {
    try {
      return await ProductService.addProduct(formData)
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message)
    }
  }
)

export const updateProduct = createAsyncThunk(
  'products/update',
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      return await ProductService.updateProduct(id, formData)
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message)
    }
  }
)

export const deleteProduct = createAsyncThunk(
  'products/delete',
  async (id, { rejectWithValue }) => {
    try {
      await ProductService.deleteProductById(id)
      return id
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message)
    }
  }
)

// Slice
const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchProducts
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      // addProduct
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload)
      })

      // updateProduct
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex((p) => p.id === action.payload.id)
        if (index !== -1) {
          state.items[index] = action.payload
        }
      })

      // deleteProduct
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter((p) => p.id !== action.payload)
      })
  }
})

export default productSlice.reducer
