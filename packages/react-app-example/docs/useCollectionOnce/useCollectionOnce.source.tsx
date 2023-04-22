import { Table, Column } from 'react-rainbow-components';
import useCustomersCollectionOnce from '~/data/customer/useCollectionOnce';

const UseCollectionExample = () => {
    const { data: customers, isLoading } = useCustomersCollectionOnce();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <Table data={customers} keyField="id">
            <Column header="Id" field="id" />
            <Column header="Name" field="name" />
        </Table>
    );

    return <div>No customers data found. </div>;
};

export default UseCollectionExample;
