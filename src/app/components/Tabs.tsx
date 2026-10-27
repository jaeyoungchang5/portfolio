import React from 'react';
import TabButton from './TabButton';

export type Tab<T extends string> = { value: T; label: string };

type TabsProps<T extends string> = {
    tabs: Tab<T>[];
    current: T;
    onChange: (value: T) => void;
};

const Tabs = <T extends string>({ tabs, current, onChange }: TabsProps<T>) => (
    <div role='tablist'>
        {tabs.map((tab) => (
            <TabButton key={tab.value} active={current === tab.value} selectTab={() => onChange(tab.value)}>
                {tab.label}
            </TabButton>
        ))}
    </div>
);

export default Tabs;
