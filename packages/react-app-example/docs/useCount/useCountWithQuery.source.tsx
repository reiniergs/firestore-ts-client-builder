import { query, where } from 'firebase/firestore';
import useCount from '~/data/customer/useCount';

const UseCountWithQueryExample = () => {
    const { count, error, isLoading } = useCount({
        listQueryFn: (ref) => query(ref, where('name', '==', 'Rei')),
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return (
            <div>
                Error:
                {' '}
                {error.message}
            </div>
        );
    }

    return (
        <div>
            Number of documents:
            {' '}
            {count}
        </div>
    );
};

export default UseCountWithQueryExample;
