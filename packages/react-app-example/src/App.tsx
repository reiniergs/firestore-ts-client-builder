/* eslint-disable no-console */
import { QueryClient, QueryClientProvider } from 'react-query';
import ExampleUseHttpQuery from './components/ExampleUseHttpQuery';
import ExampleCustomerList from './components/ExampleCustomerList';

const client = new QueryClient();

const App = () => (
    <QueryClientProvider client={client}>
        <div className="App">
            <ExampleUseHttpQuery />
            <hr />
            <ExampleCustomerList />
        </div>
    </QueryClientProvider>
);

export default App;
