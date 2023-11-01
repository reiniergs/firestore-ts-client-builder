import React from 'react';
import {
    fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import onSnapshotPaginate from '../data/customer/onSnapshotPaginate';
import useCollectionWithPagination from '../data/customer/useCollectionWithPagination';

jest.mock('../data/customer/onSnapshotPaginate', () => ({
    __esModule: true,
    default: jest.fn(),
}));

const TestComponent = ({ count }: { count: number }) => {
    useCollectionWithPagination({
        track: [count],
    });
    return null;
};

const TestSetup = () => {
    const [count, setCount] = React.useState(0);

    return (
        <>
            <button type="button" onClick={() => setCount((c) => c + 1)}>Remount</button>
            <TestComponent count={count} />
        </>
    );
};

describe('useCollectionWithPagination', () => {
    it('should unsubscribe when remount before promise resolve', async () => {
        let resolve: any;
        const promise = new Promise((r) => {
            resolve = r;
        });
        (onSnapshotPaginate as jest.Mock).mockReturnValue(promise);

        render(<TestSetup />);
        fireEvent.click(screen.getByText('Remount'));

        const unsubscribe = jest.fn();
        resolve(unsubscribe);

        await waitFor(() => expect(unsubscribe).toHaveBeenCalledTimes(1));
        expect(onSnapshotPaginate).toHaveBeenCalledTimes(2);
    });
});
