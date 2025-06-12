import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import 'modern-normalize';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </BrowserRouter>
      </Provider>
      <Toaster position='top-right' reverseOrder={false} />
</StrictMode>,
);
