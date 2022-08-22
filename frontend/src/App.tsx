import { AppLayout } from './components/AppLayout/AppLayout';
import { AppProvider } from './providers/AppProvider';
import { AppRoute } from './routes/AppRoute';

function App() {
  return (
    <AppProvider>
      <AppLayout>
        <AppRoute />
      </AppLayout>
    </AppProvider>
  );
}

export default App;
