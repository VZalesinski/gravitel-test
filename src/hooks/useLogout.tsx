import { useNavigate } from 'react-router-dom'
import { AUTH_TOKEN } from '../utils/constants'

export const useLogout = () => {
	const navigate = useNavigate()
	const login = () => {
		localStorage.removeItem(AUTH_TOKEN)
		navigate(`/login`)
	}

	return login
}
