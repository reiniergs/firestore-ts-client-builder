import { useState } from 'react';
import { Input, Button } from 'react-rainbow-components';
import addCustomer from '~/data/customer/add';

const Add = () => {
    const [name, setName] = useState('');

    const handleAdd = () => {
        addCustomer({ name });
    };

    return (
        <>
            <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <Button variant="brand" type="button" onClick={handleAdd}>Add</Button>
        </>
    );
};

export default Add;
