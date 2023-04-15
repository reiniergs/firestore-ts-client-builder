# firestore-ts-client-builder

**firestore-ts-client-builder** is a powerful tool that generates a ready-to-use, typed data layer in TypeScript for your Firestore database. By providing metadata about your data model, you can create a typed client data layer that simplifies data access and ensures type safety.

## Usage
Install the package as a development dependency:

```bash
yarn add -D firestore-ts-client-builder
```
Create a script to generate the data layer (e.g., generateDataLayer.js):

```js
import path from "path";
import dotenv from "dotenv";
import { createClientDataLayer } from "firestore-ts-client-builder";

// Load environment variables from .env file
dotenv.config();

createClientDataLayer({
  outdir: path.join(__dirname, "../src/data"),
  metadata: {
    entities: {
      customer: {
        properties: {
          name: { type: "string", isRequired: true },
          dob: { type: "number" },
          address: {
            type: "object",
            properties: {
              street: {
                type: "string",
                isRequired: true,
              },
              city: {
                type: "string",
                isRequired: true,
              },
              state: {
                type: "string",
                isRequired: true,
              },
              zip: {
                type: "number",
                isRequired: true,
              },
            },
          },
          colors: {
            type: "array",
            items: { type: "string" },
          },
        },
      },
    },
  },
  firebaseConfig: {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  },
});
```

Execute the script prior to building or starting your application. This will generate a typed Firestore client data layer that is ready for use in your TypeScript React application:

```bash
node generateDataLayer.js
```

Now you can access the generated data layer in your application:

```js
import getCustomer from "path/to/data/customer/get";

useEffect(() => {
  (async () => {
    const customer = await getCustomer(
      "z9atwfoVsiZ3vl5F2YiJ" /** customerId */
    );
    console.log(customer?.name);
  })();
}, []);
```

By using firestore-ts-client-builder, you can benefit from type-safety, cleaner code, and faster development.
