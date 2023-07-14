import { assert } from 'console';
import createCustomer from './data/customer/add';
console.log(`Run "yarn test" with the service-account.json in the root directory of the project.`);

(async () => {
    const customer = await createCustomer({
        name: 'John',
        dob: 123456789,
        foo: {
            bar: {
                foobar: 123,
            },
        },
        bar: [
            {
                foo: 'foo',
            },
        ],
        enum: 'foo',
    });
    assert(customer.name === 'John');
})()

