import useCustomerOnce from '~/data/customer/useOnce';

const CustomerDetails = () => {
    const { data, isLoading } = useCustomerOnce('6SDujnxMBUViGociM08K');

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (data) {
        return (
            <div>
                <h1>{data.name}</h1>
            </div>
        );
    }

    return <div>No customer data found.</div>;
};

export default CustomerDetails;
