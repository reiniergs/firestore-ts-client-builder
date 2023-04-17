/* eslint-disable no-console */
import { QueryClient, QueryClientProvider } from 'react-query';
import ExampleUseHttpQuery from './components/ExampleUseHttpQuery';

const client = new QueryClient();

const App = () => (
    <QueryClientProvider client={client}>
        <div className="App">
            <ExampleUseHttpQuery />
        </div>
    </QueryClientProvider>
);

export default App;
