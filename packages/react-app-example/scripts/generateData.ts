/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import dotenv from 'dotenv';
import { createClientDataLayer } from 'firestore-ts-client-builder';

// Load environment variables from .env file
dotenv.config();

createClientDataLayer({
    outdir: path.join(__dirname, '../src/data'),
    metadata: {
        types: {
            Foo: { type: 'string', enum: ['foo', 'bar'] },
            OnlyString: { type: 'string', isRequired: true, isNullable: true },
            Bar: {
                type: 'array',
                items: { type: 'string' },
            },
            Other: {
                type: 'object',
                properties: {
                    foo: { type: 'string', isRequired: true },
                    bar: { type: 'object', properties: { foo: { type: 'string' } } },
                },
            },
        },
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
                    dob: { type: 'date', isNullable: true },
                },
                subcollections: {
                    car: {
                        properties: {
                            name: { type: 'string', isRequired: true },
                            model: { type: 'string', isRequired: true },
                        },
                    },
                },
            },
            custom: {
                properties: {
                    foo: { type: 'Foo', isRequired: true, isNullable: true },
                    bar: { type: 'Bar' },
                    other: { type: 'Other' },
                    onlyString: { type: 'OnlyString', isNullable: true },
                },
            },
        },
        endpoints: {
            posts: {
                create: {
                    method: 'POST',
                    path: '/posts',
                    hook: 'mutation',
                    requestBody: {
                        properties: {
                            title: { type: 'string', isRequired: true },
                            body: { type: 'string', isRequired: true },
                            userId: { type: 'string', isRequired: true },
                        },
                    },
                    successResponse: {
                        properties: {
                            id: { type: 'string', isRequired: true },
                            title: { type: 'string', isRequired: true },
                            body: { type: 'string', isRequired: true },
                            userId: { type: 'string', isRequired: true },
                        },
                    },
                },
                update: {
                    method: 'PATCH',
                    path: '/posts/{postId}',
                    hook: 'mutation',
                    requestBody: {
                        properties: {
                            title: { type: 'string' },
                            body: { type: 'string' },
                            userId: { type: 'string' },
                        },
                    },
                    successResponse: {
                        properties: {
                            id: { type: 'string', isRequired: true },
                            title: { type: 'string', isRequired: true },
                            body: { type: 'string', isRequired: true },
                            userId: { type: 'string', isRequired: true },
                        },
                    },
                },
                get: {
                    method: 'GET',
                    path: '/posts/{postId}',
                    hook: 'query',
                    successResponse: {
                        properties: {
                            id: { type: 'string', isRequired: true },
                            title: { type: 'string', isRequired: true },
                            body: { type: 'string', isRequired: true },
                            userId: { type: 'string', isRequired: true },
                        },
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
