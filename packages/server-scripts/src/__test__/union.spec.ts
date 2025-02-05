import assignVehicle from '../data/driver/vehiclesAssigned/add';
import remove from '../data/driver/vehiclesAssigned/remove';
import { isDate } from './helpers'

describe('add', () => {
    it('should create a customer', async () => {
        const driverId = '123';
        const iceVehicle = await assignVehicle(driverId, {
            make: 'Ford',
            model: 'F-150',
            year: 2019,
            vin: '12345678901234567',
            performance: {
                type: 'ice',
                hp: 250,
            }
        });
        
        expect(iceVehicle).toEqual(expect.objectContaining({
            make: 'Ford',
            model: 'F-150',
            year: 2019,
            vin: '12345678901234567',
            performance: {
                type: 'ice',
                hp: 250,
            }
        }));
        expect(iceVehicle.id).toBeDefined();
        expect(iceVehicle.createdAt).toBeDefined();
        expect(iceVehicle.updatedAt).toBeDefined();
        expect(iceVehicle.createdAt).toEqual(iceVehicle.updatedAt);
        expect(isDate(iceVehicle.createdAt)).toBe(true);
        expect(isDate(iceVehicle.updatedAt)).toBe(true);

        const electricVehicle = await assignVehicle(driverId, {
            make: 'Tesla',
            model: 'Model S',
            year: 2020,
            vin: '12345678901234568',
            performance: {
                type: 'electric',
                kw: 500,
            }
        });
        expect(electricVehicle).toEqual(expect.objectContaining({
            make: 'Ford',
            model: 'F-150',
            year: 2019,
            vin: '12345678901234567',
            performance: {
                type: 'ice',
                hp: 250,
            }
        }));
        expect(electricVehicle.id).toBeDefined();
        expect(electricVehicle.createdAt).toBeDefined();
        expect(electricVehicle.updatedAt).toBeDefined();
        expect(electricVehicle.createdAt).toEqual(electricVehicle.updatedAt);
        expect(isDate(electricVehicle.createdAt)).toBe(true);
        expect(isDate(electricVehicle.updatedAt)).toBe(true);

        // Clean up
        await remove(driverId, iceVehicle.id);
        await remove(driverId, electricVehicle.id);
    });
});
