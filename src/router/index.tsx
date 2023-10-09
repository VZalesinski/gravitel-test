import { Navigate, Route, Routes } from 'react-router-dom'
import { DashboardPage, LoginPage } from '../pages'
import { ProtectedRoutes } from './ProtectedRoutes'

export const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigate to='/dashboard' />} />
			<Route element={<ProtectedRoutes />}>
				<Route index path='/dashboard' element={<DashboardPage />} />
			</Route>
			<Route path='/login' element={<LoginPage />} />
			<Route path='*' element={<Navigate to='/dashboard' />} />
		</Routes>
	)
}
