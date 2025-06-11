import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { Suspense, lazy } from 'react';
import Header from './components/Header/Header';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));
const CarDetailsPage = lazy(() =>
  import('./pages/CarDetailsPage/CarDetailsPage'),
);

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/catalog' element={<CatalogPage />} />
          <Route path='/catalog/:id' element={<CarDetailsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
