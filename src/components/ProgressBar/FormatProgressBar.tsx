import type { FC } from 'react'

interface IFormatProgressBar {
	title: string
	amount: () => number
}

export const FormatProgressBar: FC<IFormatProgressBar> = ({
	title,
	amount
}) => {
	return (
		<>
			<p className='text-xl font-medium'>{title}</p>

			<p className='text-4xl text-orange-500 font-bold'>{amount()}</p>
		</>
	)
}
