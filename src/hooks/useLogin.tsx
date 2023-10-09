import { useMutation } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import { LOGIN } from '../api'
import { AUTH_TOKEN } from '../utils/constants'

export const useLogin = ({
	username,
	password
}: {
	username: string
	password: string
}) => {
	const navigate = useNavigate()

	const [login] = useMutation(LOGIN, {
		variables: {
			username: username,
			pass: password
		},
		onCompleted: ({ login }) => {
			if (login?.token) {
				localStorage.setItem(AUTH_TOKEN, login.token)
				navigate('/dashboard')
			} else {
				console.log('error')
			}
		}
	})

	return login
}
