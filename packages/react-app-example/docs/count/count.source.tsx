import { useEffect, useState } from 'react';
import countCustomers from '~/data/customer/count';

const CountExample = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        (async () => {
            const result = await countCustomers();
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

export default CountExample;
