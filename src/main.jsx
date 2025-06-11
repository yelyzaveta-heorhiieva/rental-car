import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import 'modern-normalize';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
    <Toaster position='top-right' reverseOrder={false} />
  </StrictMode>,
);
