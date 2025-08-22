// src/hooks/useProduct.js
import { useState, useEffect, useCallback } from 'react'
import ProductService from '../services/productService'

export default function useProduct() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true)
      const data = await ProductService.getAllProducts()
      setProducts(data.productDtoList || [])
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }, [])

  const fetchProductsByCategory = useCallback(async (categoryId) => {
    try {
      setLoading(true)
      if (categoryId === 0) { // Tab All
        const data = await ProductService.getAllProducts()
        setProducts(data.productDtoList || [])
      } else {
        const data = await ProductService.getAllProductsByCategoryId(categoryId)
        if (data.productDtoList.length === 0) {
          setProducts([])
          setError(null) // không phải lỗi
        } else {
          setProducts(data.productDtoList || [])
          setError(null)
        }
      }
      setError(null)
    } catch (err) {
      setProducts([])
      setError('API_ERROR' + err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  const addProduct = async (formData) => {
    return await ProductService.addProduct(formData)
  }

  const updateProduct = async (id, formData) => {
    return await ProductService.updateProduct(id, formData)
  }

  const deleteProduct = async (id) => {
    return await ProductService.deleteProductById(id)
  }

  return {
    products,
    loading,
    error,
    fetchProducts,
    fetchProductsByCategory,
    addProduct,
    updateProduct,
    deleteProduct
  }
}
