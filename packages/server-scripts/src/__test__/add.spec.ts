import createCustomer from '../data/customer/add';
import remove from '../data/customer/remove';
import { isDate } from './helpers'

describe('add', () => {
    it('should create a customer', async () => {
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
        expect(customer).toEqual(expect.objectContaining({
            name: 'John',
            address: {
                street: '123 Fake St',
                city: 'Springfield',
                state: 'IL',
                zip: '90210',
            },
            emails: ['info@example.com'],
        }));
        expect(customer.id).toBeDefined();
        expect(customer.createdAt).toBeDefined();
        expect(customer.updatedAt).toBeDefined();
        expect(customer.createdAt).toEqual(customer.updatedAt);
        expect(isDate(customer.createdAt)).toBe(true);
        expect(isDate(customer.updatedAt)).toBe(true);
        // Clean up
        await remove(customer.id);
    });
});
