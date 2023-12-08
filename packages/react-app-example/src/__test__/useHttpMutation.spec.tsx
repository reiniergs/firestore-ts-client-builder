import React from 'react';
import {
    renderHook, waitFor,
} from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import useHttpMutation from '../data/useHttpMutation';

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
);

describe('useHttpMutation', () => {
    it('should call .json() when response is JSON', async () => {
        jest.spyOn(global, 'fetch').mockResolvedValueOnce({
            ok: true,
            headers: new Map([['Content-Type', 'application/json']]),
            json: jest.fn().mockResolvedValueOnce({ test: 'test' }),
        } as any);
        const { result } = renderHook(() => useHttpMutation<{ test: string }, any>({ pathname: '/test' }), { wrapper });
        result.current.mutate({
            body: { test: 'test' },
        });
        await waitFor(() => expect(result.current.data).toEqual({ test: 'test' }));
    });
    it('should call .json() when response is JSON with charset', async () => {
        jest.spyOn(global, 'fetch').mockResolvedValueOnce({
            ok: true,
            headers: new Map([['Content-Type', 'application/json; charset=utf-8']]),
            json: jest.fn().mockResolvedValueOnce({ test: 'test' }),
        } as any);
        const { result } = renderHook(() => useHttpMutation<{ test: string }, any>({ pathname: '/test' }), { wrapper });
        result.current.mutate({
            body: { test: 'test' },
        });
        await waitFor(() => expect(result.current.data).toEqual({ test: 'test' }));
    });
    it('shoud call .text() when response is not JSON', async () => {
        jest.spyOn(global, 'fetch').mockResolvedValueOnce({
            ok: true,
            headers: new Map([['Content-Type', 'text/plain']]),
            text: jest.fn().mockResolvedValueOnce('test'),
        } as any);
        const { result } = renderHook(() => useHttpMutation<{ test: string }, any>({ pathname: '/test' }), { wrapper });
        result.current.mutate({
            body: { test: 'test' },
        });
        await waitFor(() => expect(result.current.data).toEqual('test'));
    });

    it('should throw error when response is not ok and content is JSON', async () => {
        jest.spyOn(global, 'fetch').mockResolvedValueOnce({
            ok: false,
            headers: new Map([['Content-Type', 'application/json']]),
            json: jest.fn().mockResolvedValueOnce({ error: 'test' }),
        } as any);
        const { result } = renderHook(() => useHttpMutation<{ test: string }, any>({ pathname: '/test' }), { wrapper });
        result.current.mutate({
            body: { test: 'test' },
        });
        await waitFor(() => expect(result.current.error).toEqual({ error: 'test' }));
    });

    it('should throw error when response is not ok and content is HTML', async () => {
        jest.spyOn(global, 'fetch').mockResolvedValueOnce({
            ok: false,
            headers: new Map([['Content-Type', 'text/html']]),
            text: jest.fn().mockResolvedValueOnce('test'),
        } as any);
        const { result } = renderHook(() => useHttpMutation<{ test: string }, any>({ pathname: '/test' }), { wrapper });
        result.current.mutate({
            body: { test: 'test' },
        });
        await waitFor(() => expect(result.current.error?.message).toEqual('test'));
    });
});
