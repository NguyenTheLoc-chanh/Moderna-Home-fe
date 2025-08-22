// src/services/productService.js
import api from '../config/axios'

class ProductService {
  static async addProduct(formData) {
    const response = await api.post('/product/create', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    return response.data
  }

  static async updateProduct(productId, formData) {
    const response = await api.put(`/product/create/${productId}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    return response.data
  }

  static async getAllProducts() {
    const response = await api.get('/product/get-all')
    return response.data
  }

  static async searchProducts(searchValue) {
    const response = await api.get('/product/search', { params: { searchValue } })
    return response.data
  }

  static async getAllProductsByCategoryId(categoryId) {
    const response = await api.get(`/product/get-product-by-categoryId/${categoryId}`)
    return response.data
  }

  static async getProductById(productId) {
    const response = await api.get(`/product/get-product-by-id/${productId}`)
    return response.data
  }

  static async deleteProductById(productId) {
    const response = await api.delete(`/product/delete/${productId}`)
    return response.data
  }
}

export default ProductService
