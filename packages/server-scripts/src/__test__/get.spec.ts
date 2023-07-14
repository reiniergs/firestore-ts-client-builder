import createCustomer from '../data/customer/add';
import remove from '../data/customer/remove';
import get from '../data/customer/get';
import { isDate } from './helpers'

describe('get', () => {
    it('should get a customer that exists', async () => {
        const customer = await createCustomer({
            name: 'John',
            address: {
                street: '123 Fake St',
                city: 'Springfield',
                state: 'IL',
                zip: '90210',
            },
            emails: ['info@example.com'],
        });
        const sameCustomer = await get(customer.id);
        expect(sameCustomer).toEqual(customer);
        // Clean up
        await remove(customer.id);
    });
});
