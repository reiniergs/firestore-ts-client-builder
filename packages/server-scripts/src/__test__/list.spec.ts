import createCustomer from '../data/customer/add';
import remove from '../data/customer/remove';
import list from '../data/customer/list';


describe('list', () => {
    it('should list the customers', async () => {
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

        const customers = await list({
            listQueryFn: (ref) => ref.where("name", "==", "Jose").limit(2),
        });
        expect(customers.length).toBeLessThanOrEqual(2);
        customers.forEach((customer) => {
            expect(customer.name).toBe("Jose");
        });
        // Clean up
        customerIds.forEach(async (id) => {
            await remove(id);
        });
    });
});
