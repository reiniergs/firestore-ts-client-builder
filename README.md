# firestore-data-model-generator

A tool that takes metadata about your data model as input and generates a ready-to-use data layer in TypeScript.

## Usage

```js
import path from "path";
import { createClientDataLayer } from "firestore-data-model-generator";

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
    apiKey: "{apiKey}",
    authDomain: "{authDomain}",
    projectId: "{projectId}",
    storageBucket: "{storageBucket}",
    messagingSenderId: "{messagingSenderId}",
    appId: "{appId}",
    measurementId: "{measurementId}",
  },
});
```

This code can be executed prior to building or starting your application, and it will generate a typed Firestore client data layer that is ready for use in your TypeScript React application. Then you can do things like:

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
