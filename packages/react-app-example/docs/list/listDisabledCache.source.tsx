import { useState, useEffect } from 'react';
import { limit, query } from 'firebase/firestore';
import { Table, Column } from 'react-rainbow-components';
import listCustomers from '~/data/customer/list';
import { Customer } from '~/data/customer/types';

const List = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);

    useEffect(() => {
        (async () => {
            const customersList = await listCustomers({
                listQueryFn: (ref) => query(ref, limit(10)),
                disableCache: true,
            });
            setCustomers(customersList);
        })();
    }, []);

    return (
        <Table keyField="id" data={customers}>
            <Column header="Id" field="id" />
            <Column header="Name" field="name" />
        </Table>
    );
};

export default List;
