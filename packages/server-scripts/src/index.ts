import { assert } from 'console';
import createCustomer from './data/customer/add';
console.log(`Run "yarn test" with the service-account.json in the root directory of the project.`);

(async () => {
    const customer = await createCustomer({
        name: 'John',
        emails: ['john@example.com'],
        address: {
            street: '123 Main St',
            city: 'Anytown',
            state: 'CA',
            zip: '12345',
        },
        dayOfBirth: new Date('1990-01-01'),
    });
    assert(customer.name === 'John');
})()

