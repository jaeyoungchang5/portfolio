import React from 'react'
import Button from './Button'
import { ICardProps } from '../types'

const Card = ({ title, subtitle, bulletPoints, technologies }: ICardProps) => {
	return (
		<div className="mr-4 mb-4 p-6 bg-gray-800 border border-gray-700 rounded-lg shadow">
			<h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
			<p className='mb-3' dangerouslySetInnerHTML={{__html: subtitle}} />

			{bulletPoints &&
				<ul className='list-disc list-inside'>
					{bulletPoints.map((bulletPoint, index) => {
						return <li key={index} className="mb-2 text-white text-lg" dangerouslySetInnerHTML={{__html: bulletPoint}} />
					})}
				</ul>
			}
			
			{technologies.map((technology, index) => {
				return (
					<Button
						key={index}
						icon={technology}
						roundedness='rounded-lg'
						buttonClasses={['border border-blue-400', 'mr-1 mb-1']}
					/>
				)
			})}
		</div>
	)
}

export default Card