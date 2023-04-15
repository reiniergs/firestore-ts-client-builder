/* eslint-disable no-console */
import { useEffect } from 'react';
// import { query, where } from 'firebase/firestore';
import logo from './logo.svg';
import './App.css';
import getCustomer from './data/customer/get';
// import listCustomers from './data/customer/list';
// import useCustomer from './data/customer/use';
import useCustomers from './data/customer/useCollection';

const App = () => {
    useEffect(() => {
        (async () => {
            const customer = await getCustomer('6SDujnxMBUViGociM08K');
            console.log(customer?.name);
            // const customers = await listCustomers({
            //     listQueryFn: (ref) => query(ref, where('name', '==', 'Reinier Guerra')),
            // });
            // console.log(customers);
        })();
    }, []);
    // const { data, isLoading } = useCustomer('6SDujnxMBUViGociM08K');
    // console.log('foo', data, isLoading);
    const { data, isLoading } = useCustomers({
        disabled: false,
        onSnap: (customer) => {
            console.log('snap', customer);
        },
    });
    console.log('foo', data, isLoading);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit
                    {' '}
                    <code>src/App.tsx</code>
                    {' '}
                    and save to reload.
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
};

export default App;
