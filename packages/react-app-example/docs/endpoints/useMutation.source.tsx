import { FormEvent, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Button, Input } from 'react-rainbow-components';
import useCreatePost from '~/data/endpoints/posts/create/useMutation';
import useUpdatePost from '~/data/endpoints/posts/update/useMutation';
import useGetPosts from '~/data/endpoints/posts/get/useQuery';

const queryClient = new QueryClient();

const Form = () => {
    const [title, setTitle] = useState('');
    const createPostMutation = useCreatePost();
    const updatePostMutation = useUpdatePost();
    const { data: post } = useGetPosts({
        params: {
            postId: '1',
        },
        key: 'post-1',
    });
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
        <>
            <h1>
                the JSON bellow is of the post with id (1),
                fetched using useQuery generated for the entity post
            </h1>
            <p>{JSON.stringify(post)}</p>
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
        </>
    );
};

const UseMutationExample = () => (
    <QueryClientProvider client={queryClient}>
        <Form />
    </QueryClientProvider>
);

export default UseMutationExample;
