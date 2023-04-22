import { FormEvent, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Button, Input } from 'react-rainbow-components';
import useHttpMutation from '~/data/useHttpMutation';

interface Request {
    title: string;
    body: string;
    userId: number;
}

interface Response {
    id: number;
    title: string;
    body: string;
    userId: number;
}

const Form = () => {
    const [title, setTitle] = useState('');
    const createUserMutation = useHttpMutation<Request, Response>({
        pathname: '/posts',
        method: 'POST',
        onSuccess: (data) => console.log('Post created:', data),
    });

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        await createUserMutation.mutate({
            body: {
                title,
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                userId: 1,
            },
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                label="Title"
                placeholder="Enter your name"
                required
                value={title}
                disabled={createUserMutation.isLoading}
                onChange={(event) => setTitle(event.target.value)}
            />
            <Button label="Submit" type="submit" disabled={createUserMutation.isLoading} />
        </form>
    );
};

const queryClient = new QueryClient();

const UseHttpMutationExample = () => (
    <QueryClientProvider client={queryClient}>
        <Form />
    </QueryClientProvider>
);

export default UseHttpMutationExample;
