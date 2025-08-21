import { useDispatch, useSelector } from 'react-redux'
import useAxiosInterceptor from './hooks/useAxiosInterceptor'
import AppRouter from './routes'
import { useEffect } from 'react'
import { fetchUserInfo } from './store/slices/authSlice'


function App() {
  useAxiosInterceptor()
  const dispatch = useDispatch()
  const { token } = useSelector((state) => state.auth)

  useEffect(() => {
    if (token) {
      dispatch(fetchUserInfo())
    }
  }, [token, dispatch])
  return (
    <AppRouter />
  )
}

export default App
