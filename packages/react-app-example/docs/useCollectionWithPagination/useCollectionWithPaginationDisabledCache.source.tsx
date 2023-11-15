import { useState } from 'react';
import { orderBy, query } from 'firebase/firestore';
import { Table, Column, Button } from 'react-rainbow-components';
import useCustomersCollectionWithPagination from '~/data/customer/useCollectionWithPagination';

const LIMIT = 5;

const UseCollectionExample = () => {
    const [count, setCount] = useState(0);
    const {
        data: customers,
        isLoading,
        totalRecords,
        firstPage,
        hasMore,
        nextPage,
        prevPage,
    } = useCustomersCollectionWithPagination({
        limit: LIMIT,
        listQueryFn: (q) => query(q, orderBy('name')),
        track: [count],
        disableCache: true,
    });

    return (
        <div>
            <Table data={customers} keyField="id" isLoading={isLoading}>
                <Column header="Id" field="id" />
                <Column header="Name" field="name" />
            </Table>
            <Button
                label="Previous"
                onClick={prevPage}
                disabled={firstPage || isLoading}
            />
            <span>
                {' '}
                Total records:
                {' '}
                {totalRecords}
                {' '}
                - Total pages:
                {' '}
                {Math.ceil(totalRecords / LIMIT)}
                {' '}
            </span>
            <Button
                label="Next"
                onClick={nextPage}
                disabled={!hasMore || isLoading}
            />
            <Button
                label="Change filter"
                onClick={() => setCount((t) => t + 1)}
                disabled={!hasMore || isLoading}
            />
        </div>
    );
};

export default UseCollectionExample;
