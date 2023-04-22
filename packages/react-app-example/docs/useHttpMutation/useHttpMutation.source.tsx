import { FormEvent, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Button, Input } from 'react-rainbow-components';
import useHttpMutation from '~/data/useHttpMutation';

const Form = () => {
    const [title, setTitle] = useState('');
    const createUserMutation = useHttpMutation({
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
