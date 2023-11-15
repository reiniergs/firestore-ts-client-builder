import { Table, Column } from 'react-rainbow-components';
import useCustomersCollection from '~/data/customer/useCollection';

const UseCollectionExample = () => {
    const { data: customers, isLoading } = useCustomersCollection({
        disableCache: true,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <Table data={customers} keyField="id">
            <Column header="Id" field="id" />
            <Column header="Name" field="name" />
        </Table>
    );
};

export default UseCollectionExample;
