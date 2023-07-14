import createCustomer from '../data/customer/add';
import remove from '../data/customer/remove';
import get from '../data/customer/get';
import update from '../data/customer/update';

describe('update', () => {
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
        await update(customer.id, {
            name: 'Juan',
        });
        const updated = await get(customer.id);
        expect(updated.name).toBe("Juan");
        expect(updated.updatedAt.getTime()).toBeGreaterThan(updated.createdAt.getTime());
        // Clean up
        await remove(customer.id);
    });
});
