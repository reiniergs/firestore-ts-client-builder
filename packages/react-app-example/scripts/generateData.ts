/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import dotenv from 'dotenv';
import { createClientDataLayer } from 'firestore-ts-client-builder';

// Load environment variables from .env file
dotenv.config();

createClientDataLayer({
    outdir: path.join(__dirname, '../src/data'),
    metadata: {
        entities: {
            customer: {
                properties: {
                    name: { type: 'string', isRequired: true },
                    dob: { type: 'number', isNullable: true },
                    foo: {
                        type: 'object',
                        properties: {
                            bar: {
                                type: 'object',
                                properties: {
                                    foobar: { type: 'number', isRequired: true },
                                },
                            },
                        },
                    },
                    bar: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                foo: { type: 'string' },
                            },
                        },
                    },
                    enum: {
                        type: 'string',
                        enum: ['foo', 'bar'],
                        isNullable: true,
                    },

                },
            },
            driver: {
                properties: {
                    name: { type: 'string', isRequired: true },
                    foo: {
                        type: 'array',
                        items: { type: 'number' },
                    },
                },
            },
        },
        server: {
            url: 'https://jsonplaceholder.typicode.com',
        },
    },
    firebaseConfig: {
        apiKey: process.env.FIREBASE_API_KEY || '',
        authDomain: process.env.FIREBASE_AUTH_DOMAIN || '',
        projectId: process.env.FIREBASE_PROJECT_ID || '',
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET || '',
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || '',
        appId: process.env.FIREBASE_APP_ID || '',
        measurementId: process.env.FIREBASE_MEASUREMENT_ID || '',
    },
});
