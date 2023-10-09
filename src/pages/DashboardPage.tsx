import type { FC } from 'react'
import { useQuery } from '@apollo/client'
import { GET_DASHBOARDSTAT, USER } from '../api'
import { Button } from 'antd'
import { useLogout } from '../hooks/useLogout'
import { DashboardList } from '../components/DashboardList'

export const DashboardPage: FC = () => {
	const logout = useLogout()
	const { data, error, loading } = useQuery(GET_DASHBOARDSTAT)
	const user = useQuery(USER)

	if (loading || user.loading)
		return <p className='text-2xl text-center'>Loading...</p>

	if (error) {
		console.error(error)

		return <p className='text-2xl text-center'>ERROR</p>
	}

	if (data?.dashboard)
		return (
			<div className='pt-5'>
				<div className='flex justify-end items-center pr-6 gap-3 text-lg'>
					<p>User name: {user.data?.me?.username}</p>

					<Button
						size='large'
						type='primary'
						className='bg-yellow-300 text-black'
						onClick={logout}
					>
						Logout
					</Button>
				</div>

				<div className='mt-10 flex justify-around flex-wrap'>
					<DashboardList dashboard={data?.dashboard} />
				</div>
			</div>
		)
}
