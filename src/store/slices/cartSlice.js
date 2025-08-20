//  # State giỏ hàng (add/remove/update/total)
import { createSlice } from '@reduxjs/toolkit'
import cartMockData from '~/mock/cartMockData'

const initialState = {
  cartItems: cartMockData.cartItems, // danh sách sản phẩm trong giỏ
  totalQuantity: 0,
  totalAmount: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload
      const existingItem = state.cartItems.find(i => i.id === item.id)

      if (existingItem) {
        existingItem.quantity += item.quantity || 1
        existingItem.totalPrice = existingItem.price * existingItem.quantity
      } else {
        state.cartItems.push({
          ...item,
          quantity: item.quantity || 1,
          totalPrice: item.price * (item.quantity || 1)
        })
      }
      // cập nhật tổng
      state.totalQuantity = state.cartItems.reduce((sum, i) => sum + i.quantity, 0)
      state.totalAmount = state.cartItems.reduce((sum, i) => sum + i.totalPrice, 0)
    },

    removeFromCart: (state, action) => {
      const id = action.payload
      state.cartItems = state.cartItems.filter(item => item.id !== id)

      // cập nhật tổng
      state.totalQuantity = state.cartItems.reduce((sum, i) => sum + i.quantity, 0)
      state.totalAmount = state.cartItems.reduce((sum, i) => sum + i.totalPrice, 0)
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload
      const item = state.cartItems.find(i => i.id === id)
      if (item && quantity > 0) {
        item.quantity = quantity
        item.totalPrice = item.price * quantity
      }

      // cập nhật tổng
      state.totalQuantity = state.cartItems.reduce((sum, i) => sum + i.quantity, 0)
      state.totalAmount = state.cartItems.reduce((sum, i) => sum + i.totalPrice, 0)
    },

    clearCart: (state) => {
      state.cartItems = []
      state.totalQuantity = 0
      state.totalAmount = 0
    }
  }
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer