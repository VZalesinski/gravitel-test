import type { FC } from 'react'
import { TFormatStatus } from '../../utils/constants'

interface IProgressBarLegend {
	formatValue: TFormatStatus
	setFormatValue: (e: TFormatStatus) => void
	title: string
	amount: number
	value: TFormatStatus
}

export const ProgressBarLegend: FC<IProgressBarLegend> = ({
	formatValue,
	setFormatValue,
	title,
	amount,
	value
}) => {
	const classes = `flex gap-1 justify-between items-center text-lg hover:font-bold hover:text-orange-500 ${
		formatValue === value ? 'font-bold text-orange-500' : ''
	}`
	return (
		<div
			onMouseOver={() => setFormatValue(value)}
			onMouseOut={() => setFormatValue(null)}
			className={classes}
		>
			<p>{title}:</p>

			<p>{amount}</p>
		</div>
	)
}
