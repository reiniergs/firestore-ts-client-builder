import { QueryClient, QueryClientProvider } from 'react-query';
import UploadPage from './components/UploadPage';

const client = new QueryClient();

const App = () => (
    <QueryClientProvider client={client}>
        <UploadPage />
    </QueryClientProvider>
);

export default App;
