import { FC, ReactElement } from 'react'

export const BackArrow: FC = (): ReactElement => {
	return (
		<svg
			width='48'
			height='48'
			viewBox='0 0 48 48'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M24 4C12.98 4 4 12.98 4 24C4 35.02 12.98 44 24 44C35.02 44 44 35.02 44 24C44 12.98 35.02 4 24 4ZM27.58 30C28.16 30.58 28.16 31.54 27.58 32.12C27.28 32.42 26.9 32.56 26.52 32.56C26.14 32.56 25.76 32.42 25.46 32.12L18.4 25.06C17.82 24.48 17.82 23.52 18.4 22.94L25.46 15.88C26.04 15.3 27 15.3 27.58 15.88C28.16 16.46 28.16 17.42 27.58 18L21.58 24L27.58 30Z'
				fill='#4B0082'
			/>
		</svg>
	)
}
