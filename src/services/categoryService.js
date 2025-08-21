import api from '../config/axios'

class CategoryService {
  static async getAllCategories() {
    try {
      const response = await api.get('/category/get-all')
      return response.data
    } catch (err) {
      // Có thể logout hoặc trả null nếu token invalid
      throw new Error(err)
    }
  }

  static async getCategoryById(categoryId) {
    try {
      const response = await api.get(`/category/get-category-by-id/${categoryId}`)
      return response.data
    } catch (err) {
      // Có thể logout hoặc trả null nếu token invalid
      throw new Error(err)
    }
  }
}

export default CategoryService