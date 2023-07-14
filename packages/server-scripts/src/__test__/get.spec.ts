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
            dayOfBirth: new Date('1980-01-01'),
        });
        const sameCustomer = await get(customer.id);
        expect(sameCustomer).toEqual(customer);
        expect(isDate(sameCustomer.dayOfBirth)).toBe(true);
        // Clean up
        await remove(customer.id);
    });
});
