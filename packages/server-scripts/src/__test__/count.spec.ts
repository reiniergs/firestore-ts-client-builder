import createCustomer from '../data/customer/add';
import remove from '../data/customer/remove';
import count from '../data/customer/count';
import { isDate } from './helpers'

describe('count', () => {
    it('should count the customers', async () => {
        const customerIds = [];
        ['Pedro', 'Juan', 'Jose'].forEach(async (name) => {
            const cus = await createCustomer({
                name,
                address: {
                    street: '123 Fake St',
                    city: 'Springfield',
                    state: 'IL',
                    zip: '90210',
                },
                emails: [`${name}@example.com`],
            });
            customerIds.push(cus.id);
        });

        const amount = await count();
        expect(amount).toBeGreaterThanOrEqual(3);
        // Clean up
        customerIds.forEach(async (id) => {
            await remove(id);
        });
    });
});
