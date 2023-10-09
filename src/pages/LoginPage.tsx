import { useState, useEffect } from 'react'
import type { FC } from 'react'
import { Button, Input } from 'antd'
import { useLogin } from '../hooks/useLogin'
import { AUTH_TOKEN } from '../utils/constants'

export const LoginPage: FC = () => {
	useEffect(() => {
		localStorage.removeItem(AUTH_TOKEN)
	})

	const [formState, setFormState] = useState({
		username: '',
		password: ''
	})

	const login = useLogin({
		username: formState.username,
		password: formState.password
	})

	const onHandleLogin = () => {
		login()
	}

	return (
		<div className='h-screen flex flex-col justify-center items-center w-80 mx-auto gap-4'>
			<p className='text-2xl'>Вход</p>

			<Input
				placeholder='Логин'
				size='large'
				value={formState.username}
				onChange={e =>
					setFormState({
						...formState,
						username: e.target.value
					})
				}
			/>

			<Input.Password
				placeholder='Пароль'
				size='large'
				value={formState.password}
				onChange={e =>
					setFormState({
						...formState,
						password: e.target.value
					})
				}
			/>

			<Button
				className='bg-yellow-300 text-black'
				size='large'
				block
				onClick={onHandleLogin}
			>
				Войти
			</Button>
		</div>
	)
}
