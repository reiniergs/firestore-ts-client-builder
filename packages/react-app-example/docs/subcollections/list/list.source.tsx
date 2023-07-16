import { useState, useEffect } from 'react';
import { limit, query } from 'firebase/firestore';
import { Table, Column } from 'react-rainbow-components';
import listCars from '~/data/driver/car/list';
import { Car } from '~/data/driver/car/types';

const driverId = 'cVpvbSDxeXn02RJo4ya0';

const List = () => {
    const [cars, setCars] = useState<Car[]>([]);

    useEffect(() => {
        (async () => {
            const carList = await listCars(driverId, {
                listQueryFn: (ref) => query(ref, limit(10)),
            });
            setCars(carList);
        })();
    }, []);

    return (
        <Table keyField="id" data={cars}>
            <Column header="Id" field="id" />
            <Column header="Name" field="name" />
            <Column header="Model" field="model" />
        </Table>
    );
};

export default List;
