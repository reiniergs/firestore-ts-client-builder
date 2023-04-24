import useCount from '~/data/customer/useCount';

const UseCountExample = () => {
    const { count, error, isLoading } = useCount();

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

export default UseCountExample;
