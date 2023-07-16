import { FormEvent, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Button, Input } from 'react-rainbow-components';
import useCreatePost from '~/data/endpoints/posts/create/useMutation';
import useUpdatePost from '~/data/endpoints/posts/update/useMutation';

const Form = () => {
    const [title, setTitle] = useState('');
    const createPostMutation = useCreatePost();
    const updatePostMutation = useUpdatePost();

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        createPostMutation.mutate({
            body: {
                title,
                userId: 'uid-1',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
        }, {
            onSuccess: (data) => {
                console.log('Post created:', data);
                updatePostMutation.mutate({
                    params: {
                        postId: data.id,
                    },
                    body: {
                        title: 'Updated title',
                        body: 'Updated body',
                    },
                }, {
                    onSuccess: (updatedData) => {
                        console.log('Updated data:', updatedData);
                    },
                });
            },
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                label="Title"
                placeholder="Enter the blog post title"
                required
                value={title}
                disabled={createPostMutation.isLoading}
                onChange={(event) => setTitle(event.target.value)}
            />
            <Button label="Submit" type="submit" disabled={createPostMutation.isLoading} />
        </form>
    );
};

const queryClient = new QueryClient();

const UseMutationExample = () => (
    <QueryClientProvider client={queryClient}>
        <Form />
    </QueryClientProvider>
);

export default UseMutationExample;
