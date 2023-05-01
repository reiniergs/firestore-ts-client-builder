import { query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import countCustomers from '~/data/customer/count';

const QueryCountExample = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        (async () => {
            const result = await countCustomers({
                listQueryFn: (ref) => query(ref, where('name', '==', 'Rei')),
            });
            setCount(result);
        })();
    }, []);

    return (
        <div>
            Number of documents:
            {' '}
            {count}
        </div>
    );
};

export default QueryCountExample;
