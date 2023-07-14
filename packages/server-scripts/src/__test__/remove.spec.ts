import createCustomer from '../data/customer/add';
import remove from '../data/customer/remove';
import get from '../data/customer/get';

describe('remove', () => {
    it('should list the customers', async () => {
        const customer = await createCustomer({
            name: 'Jose',
            address: {
                street: '123 Fake St',
                city: 'Springfield',
                state: 'IL',
                zip: '90210',
            },
            emails: ['jose@example.com'],
        });
        expect(customer.name).toBe("Jose");
        await remove(customer.id);
        const dontExists = await get(customer.id);
        expect(dontExists).toBeNull();
    });
});
