import React, { useState } from 'react';
import Button from '../ui/Button';
import Tabs, { TabItem } from '../ui/Tabs';

interface ParsedData {
    columns: string[];
    rows: string[][];
}

const UploadPage: React.FC = () => {
    const [active, setActive] = useState('upload');
    const [data, setData] = useState<ParsedData | null>(null);
    const [loading, setLoading] = useState(false);

    const items: TabItem[] = [
        { key: 'upload', label: 'Upload' },
        { key: 'preview', label: 'Preview' },
    ];

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setLoading(true);
        const reader = new FileReader();
        reader.onload = () => {
            const text = String(reader.result);
            const lines = text.split(/\r?\n/).filter(Boolean);
            const rows = lines.map((l) => l.split(','));
            const columns = rows[0] || [];
            const previewRows = rows.slice(1, 21); // 20 rows
            setData({ columns, rows: previewRows });
            setLoading(false);
            setActive('preview');
        };
        reader.readAsText(file);
    };

    const recordCount = data ? data.rows.length : 0;
    const accountCount = data ? new Set(data.rows.map((r) => r[0])).size : 0;

    const recordCharge = (recordCount * 0.01).toFixed(2);
    const accountCharge = (accountCount * 0.05).toFixed(2);

    return (
        <div className="min-h-screen bg-gray-50 p-4">
            <div className="max-w-4xl mx-auto bg-white shadow rounded p-6">
                <h1 className="text-2xl font-semibold mb-4">Data Import</h1>
                <Tabs items={items} activeKey={active} onChange={setActive} />
                {active === 'upload' && (
                    <div className="space-y-4">
                        <input
                            type="file"
                            accept=".csv,text/csv"
                            onChange={handleFileChange}
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded cursor-pointer focus:outline-none" 
                        />
                        {loading && <div className="text-blue-500">Loading...</div>}
                    </div>
                )}
                {active === 'preview' && data && (
                    <div>
                        <div className="mb-2 flex space-x-4 text-sm">
                            <div>Records: {recordCount} (${recordCharge})</div>
                            <div>Accounts: {accountCount} (${accountCharge})</div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-left text-sm">
                                <thead className="bg-gray-100">
                                    <tr>
                                        {data.columns.map((c, i) => (
                                            <th key={i} className="px-2 py-1 whitespace-nowrap">{c}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.rows.map((row, idx) => (
                                        <tr key={idx} className="border-b">
                                            {row.map((cell, cidx) => (
                                                <td key={cidx} className="px-2 py-1 whitespace-nowrap">
                                                    {cell}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-4 text-right">
                            <Button onClick={() => console.log('Next step')}>Next Step</Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UploadPage;
