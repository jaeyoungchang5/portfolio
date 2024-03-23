import React from 'react'
import { educations } from '../content'
import Card from './Card'

const EducationSection = () => {
    return (
        <section className='' id='education'>
			<div className="place-self-center text-slate-200 text-left justify-self-start">
                <h2 className="text-4xl font-bold text-blue-400 mb-4">
                    Education
                </h2>
			</div>

			<div className='flex flex-col'>
                    {educations.map((education, index) => {
						return (
							<Card 
								key={index}
								title={education.title} 
								subtitle={education.subtitle} 
								bulletPoints={education.bulletPoints}
								technologies={education.technologies}
							/>
						)
                    })}
                </div>
		</section>
    )
}

export default EducationSection