/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import dotenv from 'dotenv';
import { createAdminDataLayer } from 'firestore-ts-client-builder';

// Load environment variables from .env file
dotenv.config();

const USStates = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
];

createAdminDataLayer({
    outdir: path.join(__dirname, '../src/data'),
    metadata: {
        types: {
            Foo: { type: 'string', enum: ['foo', 'bar'] },
        },
        entities: {
            customer: {
                properties: {
                    name: { type: 'string', isRequired: true },
                    address: {
                        type: 'object',
                        properties: {
                            street: { type: 'string', isRequired: true },
                            city: { type: 'string', isRequired: true },
                            state: { type: 'string', isRequired: true, enum: USStates },
                            zip: { type: 'string', isRequired: true },
                        },
                    },
                    emails: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                    },
                    dayOfBirth: { type: 'date' },
                },
            },
            driver: {
                properties: {
                    firstname: { type: 'string', isRequired: true },
                    lastname: { type: 'string', isRequired: true },
                    licenseNumber: { type: 'string', isRequired: true },
                },
                subcollections: {
                    vehiclesAssigned: {
                        properties: {
                            make: { type: 'string', isRequired: true },
                            model: { type: 'string', isRequired: true },
                            year: { type: 'number', isRequired: true },
                            vin: { type: 'string', isRequired: true },
                        },
                    }
                },
            },
            custom: {
                properties: {
                    foo: { type: 'Foo' }
                }
            }
        },
    },
});
