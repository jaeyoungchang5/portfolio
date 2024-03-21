import React from 'react'
import Button from './Button'
import { BorderRoundness, BorderType, ICardProps } from '../types'

const Card = ({ title, subtitle, bulletPoints, technologies }: ICardProps) => {
	return (
		<div className="mb-4 p-3 md:p-6 bg-gray-800 border border-gray-700 rounded-lg shadow">
			<h5 className="mb-1 text-2xl font-bold tracking-tight text-white">{title}</h5>
			{subtitle &&
				<p className='mb-3 text-gray-400' dangerouslySetInnerHTML={{__html: subtitle}} />
			}

			{bulletPoints &&
				<ul className={`text-left ${bulletPoints.length > 1 && 'list-disc list-inside'}`}>
					{bulletPoints.map((bulletPoint, index) => {
						return <li key={index} className="mb-2 text-white text-lg" dangerouslySetInnerHTML={{__html: bulletPoint}} />
					})}
				</ul>
			}
			
			<div className='justify-start flex flex-row flex-wrap'>
				{technologies.map((technology, index) => {
					return (
						<Button
							key={index}
							icon={technology}
							border={BorderType.thin}
							roundedness={BorderRoundness.large}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default Card