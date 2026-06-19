import { BrowserRouter } from 'react-router-dom';

import PageContainer from './atoms/PageContainer';
import AppRoutes from './routes/AppRoutes';
import ResponsiveAppBar from './components/CustomAppBar';

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <PageContainer>
        <AppRoutes />
      </PageContainer>
    </BrowserRouter>
  );
}

export default App;
