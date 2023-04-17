import useHttpQuery from '../../data/useHttpQuery';

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const ExampleUseHttpQuery = () => {
    const { data, isLoading } = useHttpQuery<Todo>({
        pathname: '/todos/1',
        method: 'GET',
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Example useHttpQuery</h1>
            <h2>{data?.title}</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default ExampleUseHttpQuery;
