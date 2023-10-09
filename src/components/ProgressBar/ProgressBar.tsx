import { useState, type FC, useEffect } from 'react'
import { Progress } from 'antd'
import { ProgressBarLegend } from './ProgressBarLegend'
import {
	TFormatStatus,
	formatAmount,
	formatProgressBarText
} from '../../utils/constants'
import { FormatProgressBar } from './FormatProgressBar'

interface IProgressBar {
	active: number
	inactive: number
	completed: number
	parentId: string
}

export const ProgressBar: FC<IProgressBar> = ({
	active,
	inactive,
	completed,
	parentId
}) => {
	const [formatValue, setFormatValue] = useState<TFormatStatus>(null)

	useEffect(() => {
		setFormatValue('all')
		setFormatValue(null)
	}, [])

	const successPercent = Math.floor(
		(completed / (active + inactive + completed)) * 100
	)

	const percent = Math.floor(
		((active + completed) / (active + inactive + completed)) * 100
	)

	const parentElemnt = document.querySelector(`.${parentId}`)
	const strokeInactive = parentElemnt?.querySelector(
		'.ant-progress-circle-trail'
	)
	const strokeActive = parentElemnt?.querySelector('.ant-progress-circle-path')
	const strokeCompleted = parentElemnt?.querySelectorAll(
		'.ant-progress-circle-path'
	)[1]
	strokeInactive?.addEventListener('mouseover', () =>
		setFormatValue('inactive')
	)
	strokeInactive?.addEventListener('mouseout', () => setFormatValue(null))

	strokeActive?.addEventListener('mouseover', () => setFormatValue('active'))
	strokeActive?.addEventListener('mouseout', () => setFormatValue(null))

	strokeCompleted?.addEventListener('mouseover', () =>
		setFormatValue('completed')
	)
	strokeCompleted?.addEventListener('mouseout', () => setFormatValue(null))

	// const formatAmount = () => {
	// 	switch (formatValue) {
	// 		case 'active':
	// 			return active
	// 		case 'all':
	// 			return active + inactive + completed
	// 		case 'completed':
	// 			return completed
	// 		case 'inactive':
	// 			return inactive
	// 		default:
	// 			return active + inactive + completed
	// 	}
	// }

	return (
		<div>
			<Progress
				size={300}
				type='dashboard'
				strokeLinecap='butt'
				gapDegree={0}
				success={{
					percent: successPercent,
					strokeColor:
						formatValue === 'completed' || formatValue === 'all'
							? '#f97316'
							: '#94a3b8'
				}}
				trailColor={
					formatValue === 'inactive' || formatValue === 'all' ? '#f97316' : ''
				}
				strokeColor={
					formatValue === 'active' || formatValue === 'all'
						? '#f97316'
						: '#cbd5e1'
				}
				percent={percent}
				format={() => (
					<FormatProgressBar
						title={
							formatValue === null
								? 'Всего'
								: formatProgressBarText[formatValue]
						}
						amount={() =>
							formatAmount(active, inactive, completed, formatValue)
						}
					/>
				)}
			/>

			<div className='mt-5 flex flex-col gap-2'>
				<ProgressBarLegend
					formatValue={formatValue}
					amount={active + inactive + completed}
					title='Всего'
					setFormatValue={setFormatValue}
					value='all'
				/>

				<ProgressBarLegend
					formatValue={formatValue}
					amount={active}
					title='Активных'
					setFormatValue={setFormatValue}
					value='active'
				/>

				<ProgressBarLegend
					formatValue={formatValue}
					amount={inactive}
					title='Неактивных'
					setFormatValue={setFormatValue}
					value='inactive'
				/>

				<ProgressBarLegend
					formatValue={formatValue}
					amount={completed}
					title='Завершенных'
					setFormatValue={setFormatValue}
					value='completed'
				/>
			</div>
		</div>
	)
}
