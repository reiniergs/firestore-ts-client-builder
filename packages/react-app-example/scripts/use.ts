import { useState, useEffect } from 'react';
import onSnapshotDoc from "./onSnapshotDoc";
import { Customer } from './types';
import { UseDocHook} from '../types';

const useDoc: UseDocHook<Customer> = (id) => {
    const [data, setData] = useState<Customer>();
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const unsub = onSnapshotDoc(`/customer/${id}`, (doc) => {
            setData(doc);
            setLoading(false);   
        });
        return () => unsub();
    }, [id]);
    return { data, isLoading };
}

export default useDoc;