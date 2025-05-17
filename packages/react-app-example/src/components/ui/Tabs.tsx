import React from 'react';

export interface TabItem {
    key: string;
    label: string;
}

interface TabsProps {
    items: TabItem[];
    activeKey: string;
    onChange: (key: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ items, activeKey, onChange }) => (
    <div className="flex border-b mb-4">
        {items.map((item) => (
            <button
                key={item.key}
                className={`px-4 py-2 border-b-2 focus:outline-none ${activeKey === item.key ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500'}`}
                onClick={() => onChange(item.key)}
            >
                {item.label}
            </button>
        ))}
    </div>
);

export default Tabs;
