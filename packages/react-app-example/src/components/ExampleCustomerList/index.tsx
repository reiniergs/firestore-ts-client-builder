import { Table, Column } from 'react-rainbow-components';
import useCustomersCollection from '../../data/customer/useCollection';

const ExampleCustomerList = () => {
    const { data: customers, isLoading, error } = useCustomersCollection();

    if (isLoading) {
        return <div>Loading customers...</div>;
    }

    if (error) {
        return (
            <div>
                Error loading customers:
                {' '}
                {error.message}
            </div>
        );
    }

    if (!customers || customers.length === 0) {
        return <div>No customers found.</div>;
    }

    return (
        <div>
            <h1>Customer Collection Example</h1>
            <p>
                This example demonstrates reading from the customer collection
                using the useCollection hook.
            </p>
            <p>
                Total customers:
                {' '}
                {customers.length}
            </p>

            <Table data={customers} keyField="id">
                <Column header="ID" field="id" />
                <Column header="Name" field="name" />
                <Column header="Date of Birth" field="dob" />
                <Column header="Enum" field="enum" />
            </Table>
        </div>
    );
};

export default ExampleCustomerList;
