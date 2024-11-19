import React from 'react';
import TabButton from './TabButton';
import { ITabsProps, SkillType } from '../types';

const Tabs = ({ tabs, currentTab, updateTabCallback }: ITabsProps) => {
    return (
        <div className=''>
            {tabs.map((tab, index) => {
                return (
                    <TabButton key={index} selectTab={() => updateTabCallback(tab.tab)} active={currentTab === tab.tab}>
                        {' '}
                        {tab.text}{' '}
                    </TabButton>
                );
            })}
        </div>
    );
};

export default Tabs;
