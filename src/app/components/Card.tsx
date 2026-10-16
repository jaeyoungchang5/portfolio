import React from 'react';
import Button from './Button';
import { BorderRoundness, BorderType, ICardProps } from '../types';

const BulletList = ({ bulletPoints }: { bulletPoints: string[] }) => {
    return (
        <ul className={`text-left ${bulletPoints.length > 1 && 'list-disc list-inside'}`}>
            {bulletPoints.map((bulletPoint, index) => {
                return (
                    <li
                        key={index}
                        className='mb-2 text-white text-lg'
                        dangerouslySetInnerHTML={{ __html: bulletPoint }}
                    />
                );
            })}
        </ul>
    );
};

const Card = ({ title, subtitle, bulletPoints, technologies, link, roles }: ICardProps) => {
    if (link) {
        subtitle += `${subtitle && ' | '} <a class='funderline' href=${link.link} target='_blank'>${link.text}</a>`;
    }

    return (
        <div className='mb-4 p-4 md:p-6 bg-gray-800 border border-gray-700 rounded-lg shadow'>
            {roles ? (
                <ol className='ml-1.5'>
                    {roles.map((role, index) => {
                        return (
                            <li key={index} className={`relative pl-5 ${index < roles.length - 1 ? 'pb-2' : ''}`}>
                                <span
                                    className={`absolute left-0 bottom-0 w-0.5 bg-gray-600 ${index === 0 ? 'top-4' : 'top-0'}`}
                                />
                                <span className='absolute -left-[5px] top-2.5 h-3 w-3 rounded-full bg-blue-400' />
                                <h5 className='mb-1 text-2xl font-bold tracking-tight text-white'>{role.title}</h5>
                                {role.subtitle && (
                                    <p
                                        className='mb-3 text-gray-400'
                                        dangerouslySetInnerHTML={{ __html: role.subtitle }}
                                    />
                                )}
                                <BulletList bulletPoints={role.bulletPoints} />
                            </li>
                        );
                    })}
                </ol>
            ) : (
                <>
                    <h5 className='mb-1 text-2xl font-bold tracking-tight text-white'>{title}</h5>
                    {subtitle && <p className='mb-3 text-gray-400' dangerouslySetInnerHTML={{ __html: subtitle }} />}
                    {bulletPoints.length > 0 && <BulletList bulletPoints={bulletPoints} />}
                </>
            )}

            <div className='justify-start flex flex-row flex-wrap'>
                {technologies.map((technology, index) => {
                    return (
                        <Button
                            key={index}
                            icon={technology}
                            border={BorderType.thin}
                            roundedness={BorderRoundness.large}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Card;
