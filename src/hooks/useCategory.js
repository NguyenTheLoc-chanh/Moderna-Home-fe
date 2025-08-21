// src/hooks/useCategory.js
import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import {
  fetchCategories,
  fetchCategoryById,
  clearSelected
} from '../store/slices/categorySlice'

export const useCategory = () => {
  const dispatch = useDispatch()
  const { categories, selectedCategory, loading, error } = useSelector(
    (state) => state.category
  )

  const loadCategories = useCallback(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  const loadCategoryById = useCallback((id) => {
    dispatch(fetchCategoryById(id))
  }, [dispatch])

  const clearSelectedCategory = useCallback(() => {
    dispatch(clearSelected())
  }, [dispatch])

  return {
    categories,
    selectedCategory,
    loading,
    error,
    loadCategories,
    loadCategoryById,
    clearSelected: clearSelectedCategory
  }
}
