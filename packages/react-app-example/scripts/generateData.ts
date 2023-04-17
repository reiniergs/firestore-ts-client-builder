/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import { createClientDataLayer } from 'firestore-ts-client-builder';

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
        apiKey: 'AIzaSyAPtQh_oq1y85NT2SL7kBO2zKaw79FdrH0',
        authDomain: 'grow-7b6b1.firebaseapp.com',
        projectId: 'grow-7b6b1',
        storageBucket: 'grow-7b6b1.appspot.com',
        messagingSenderId: '1052492926493',
        appId: '1:1052492926493:web:06cb198c1b0aa08b6040f4',
        measurementId: 'G-12DGBG55KC',
    },
});
