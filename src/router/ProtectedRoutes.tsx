import { Navigate, Outlet } from 'react-router-dom'
import { AUTH_TOKEN } from '../utils/constants'

const useAuth = () => {
	const user = localStorage.getItem(AUTH_TOKEN)

	return user
}

export const ProtectedRoutes = () => {
	const isAuth = useAuth()
	return isAuth ? <Outlet /> : <Navigate to='/login' />
}
