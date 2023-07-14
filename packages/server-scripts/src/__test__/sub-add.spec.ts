import assignVehicle from '../data/driver/vehiclesAssigned/add';
import remove from '../data/driver/vehiclesAssigned/remove';
import { isDate } from './helpers'

describe('add', () => {
    it('should create a customer', async () => {
        const driverId = '123';
        const vehicle = await assignVehicle(driverId, {
            make: 'Ford',
            model: 'F-150',
            year: 2019,
            vin: '12345678901234567',
        });
        expect(vehicle).toEqual(expect.objectContaining({
            make: 'Ford',
            model: 'F-150',
            year: 2019,
            vin: '12345678901234567',
        }));
        expect(vehicle.id).toBeDefined();
        expect(vehicle.createdAt).toBeDefined();
        expect(vehicle.updatedAt).toBeDefined();
        expect(vehicle.createdAt).toEqual(vehicle.updatedAt);
        expect(isDate(vehicle.createdAt)).toBe(true);
        expect(isDate(vehicle.updatedAt)).toBe(true);
        // Clean up
        await remove(driverId, vehicle.id);
    });
});
