import type { FC } from 'react'
import { Statistic } from '../__generated__/graphql'
import { ProgressBar } from './ProgressBar/ProgressBar'

interface IDashboardList {
	dashboard: {
		dialogs: Statistic
		scenarios: Statistic
		lists: Statistic
	}
}

export const DashboardList: FC<IDashboardList> = ({ dashboard }) => {
	const { dialogs, lists, scenarios } = dashboard

	return (
		<>
			<div className='progress-1'>
				<ProgressBar
					active={dialogs.active}
					completed={dialogs.completed}
					inactive={dialogs.inactive}
					parentId='progress-1'
				/>
			</div>
			<div className='progress-2'>
				<ProgressBar
					active={lists.active}
					completed={lists.completed}
					inactive={lists.inactive}
					parentId='progress-2'
				/>
			</div>
			<div className='progress-3'>
				<ProgressBar
					active={scenarios.active}
					completed={scenarios.completed}
					inactive={scenarios.inactive}
					parentId='progress-3'
				/>
			</div>
		</>
	)
}
