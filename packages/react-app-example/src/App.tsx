import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import getCustomer from "./data/customer/get";
// import addCustomer from "./data/customer/add";
// import updateCustomer from "./data/customer/update";
// import removeCustomer from "./data/customer/remove";
import listCustomers from "./data/customer/list";
import { query, where } from "firebase/firestore";
import onSnapshotCustomer from "./data/customer/onSnapshotDoc";
import onSnapshotCustomers from "./data/customer/onSnapshotCollection";

function App() {
  useEffect(() => {
    (async () => {
      onSnapshotCustomers({}, (customers) => {
        console.log(customers);
      })
      // const customer = await getCustomer("6SDujnxMBUViGociM08K");
      // console.log(customer?.name);
      // await addCustomer({
      //   name: "Saray Pacheco",
      //   foo: {
      //     bar: {
      //       foobar: 5,
      //     },
      //   },
      // });
      // await updateCustomer("6SDujnxMBUViGociM08K", {
      //   name: "Reinier Guerra",
      // });
      // await removeCustomer("cLBoDB6ilEWIudsaxM9k");
      // const customers = await listCustomers({
      //   listQueryFn: (ref) => query(ref, where("name", "==", "Reinier Guerra")),
      // });
      // console.log(customers);
    })();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
